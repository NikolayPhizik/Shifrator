"use strict";

class ShifratorUserInterface {
    constructor(data) {
        this._TextTitle = ["Шифратор", "Дешифратор"];
        this._LabelText = ["текст для шифрования", "для расшифровки"];
        this._LabelTextResult = ["шифрования", "дешифрования"];
        this._passwordLabelText = ["для шифрования(анг.)", "шифрования(анг.)"];
        this._buttonLabel = ["Зашифровать", "Расшифровать"];
        this._shifratorDrawing = document.querySelector(".containerId");
        this._shifratorDrawingFunction(0);
        this._selection = document.querySelector(".selection");
        this._buttonSwitchingShifrators = document.querySelectorAll(".buttonSwitchingShifrators");
        this._ShifratorBusinessLogicLayer = new ShifratorBusinessLogicLayer(data);
    }

    _shifratorDrawingFunction(i) {
        this._shifratorDrawing.innerHTML = `<div class="tab">
			<h1>${this._TextTitle[i]}</h1>
			<form>
				<div class="text-enter">
					<label>Введите сюда ${this._LabelText[i]}</label>
					<textarea class="textEnter" name="comment"></textarea>
				</div>
				<div class="password-enter">
					<label>Введите пароль ${this._passwordLabelText[i]}</label>
					<input class="passwordEnter" type="password" name="password">
				</div>
				<div class="result">
					<label>Результат ${this._LabelTextResult[i]}</label>
					<textarea class="coder-text" name="comment"></textarea>
				</div>
				<button class="button" name="submit">${this._buttonLabel[i]}</button>
			</form>
		</div>`;

        this._textEnter = document.querySelector(".textEnter");
        this._passwordEnter = document.querySelector(".passwordEnter");
        this._resultat = document.querySelector(".result>textarea");
        this._shifratorButton = document.querySelector(".button");
        this.listenerShifratorButton(i);
    }

    switchingShifratorDeshifrator() {
        this._selection.addEventListener("click", (event) => {
            if (event.target && event.target.tagName === "BUTTON") {
                this._buttonSwitchingShifrators.forEach((item, i) => {
                    if (event.target === item) {
                        this._shifratorDrawingFunction(i);
                    }
                });
            }
        });
    }
    
    listenerShifratorButton(i) {
        this._shifratorButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            let data = [this._textEnter.value, this._passwordEnter.value, this.resultEnter, i];
            this._ShifratorBusinessLogicLayer.start(data);
        });
    }

    resultEnter = (result) => {
        this._resultat.textContent = result;
    }
}

let start = new ShifratorUserInterface;
start.switchingShifratorDeshifrator();
start.listenerShifratorButton();