export class FormValidator {
    constructor(form) {
        this.form = form;
        this.requiredFields = [
            { name: 'name', len: 2, pattern: /^[a-zA-Z]*$/ },
            { name: 'email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // Регулярное выражение для email
            { name: 'tel', len: 10, mask: '+7 (___) ___-__-__' } // Минимальная длина и маска для телефона
        ];
        this.errorMessages = {};
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.validate(e));
        this.requiredFields.forEach(field => {
            const input = this.form.querySelector(`#${field.name}`);
            if (input) {
                input.addEventListener('input', () => this.hideError(field.name));
                if (field.mask) {
                    this.applyMask(input, field.mask);
                }
            }
        });
    }

    validate(e) {
        e.preventDefault();
        let isValid = true;

        this.requiredFields.forEach(field => {
            const input = this.form.querySelector(`#${field.name}`);
            if (!input) return; // Если элемент не найден, пропускаем его

            const value = input.value.trim();

            if (value === '' || (field.len && value.length < field.len) || (field.pattern && !field.pattern.test(value))) {
                isValid = false;
                this.showError(field.name);
            } else {
                this.hideError(field.name);
            }
        });

        if (isValid) {
            console.log('Форма успешно отправлена');
            this.form.reset();
        }
    }

    showError(field) {
        const errorElement = document.getElementById(`${field}-error`);
        if (errorElement) {
            errorElement.style.display = 'block';
            this.errorMessages[field] = true;
        }
    }

    hideError(field) {
        const errorElement = document.getElementById(`${field}-error`);
        if (errorElement) {
            errorElement.style.display = 'none';
            delete this.errorMessages[field];
        }
    }

    applyMask(input, mask) {
        input.addEventListener('input', function () {
            let matrix = mask,
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            });
        }, false);

        input.addEventListener('blur', function () {
            if (this.value.length == 2) this.value = '';
        }, false);

        input.addEventListener('focus', function () {
            if (this.value.length == 0) {
                this.value = mask;
                this.selectionStart = 4;
                this.selectionEnd = 4;
            }
        }, false);
    }
}