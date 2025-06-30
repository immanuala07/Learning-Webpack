import './hello-world-button.scss';
class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        const body = document.querySelector('body');
        button.onclick = function () {
            const double = x => x * 2;
            const square = x => x * x;
            const increment = x => x + 1;
            // const result = 3
            //     |> increment
            //     |> double
            //     |> square;
            // console.log("Pipeline Operator value : ", result);
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default HelloWorldButton;