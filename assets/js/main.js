function Calculator(){
        // atributos
        this.input = document.querySelector('.calc-input');
        this.clear = document.querySelector('.btn-clear');

        // métodos
        this.start = () => {
            this.clickBtns();
            this.pressEnter();
        };

        this.clickBtns = () => {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;
                if(el.classList.contains('btn-num')) this.btnToInput(el.innerText);
                if(el.classList.contains('btn-clear')) this.clearInput();
                if(el.classList.contains('btn-del')) this.deleteOne();
                if(el.classList.contains('btn-eq')) this.count();
            });
        };

        this.pressEnter = () => {
            document.addEventListener('keypress', e =>{
                if(e.keyCode === 13){
                    this.count();
                }
            });
        };

        this.btnToInput = value => {
            this.input.value += value;
            this.input.focus();
        };
        this.clearInput = () => this.input.value = '';
        this.deleteOne = () => this.input.value = this.input.value.slice(0, -1);
        this.count = () => {
            let count = this.input.value;
            try {
                count = eval(count);

                if(!count){
                    alert('Conta inválida!');
                    this.clearInput();
                    return;
                }
                this.input.value = count;
            } catch(e){
                alert('Conta inválida!');
                this.clearInput();
                return;
            }
        };
    }

const calculator = new Calculator();
calculator.start(); 