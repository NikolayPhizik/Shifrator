"use strict";

class ShifratorBusinessLogicLayer {
    constructor() {

        this._encryptionTableObject = {
            "`": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "0": 10,
            "-": 11, "=": 12, "q": 13, "w": 14, "e": 15, "r": 16, "t": 17, "y": 18, "u": 19, "i": 20,
            "o": 21, "p": 22, "[": 23, "]": 24, "a": 25, "s": 26, "d": 27, "f": 28, "g": 29, "h": 30,
            "j": 31, "k": 32, "l": 33, ";": 34, "'": 35, "z": 36, "x": 37, "c": 38, "v": 39, "b": 40,
            "n": 41, "m": 42, ",": 43, ".": 44, "/": 45, "~": 46, "!": 47, "@": 48, "#": 49, "$": 50,
            "%": 51, "^": 52, "&": 53, "*": 54, "(": 55, ")": 56, "_": 57, "+": 58, "Q": 59, "W": 60,
            "E": 61, "R": 62, "T": 63, "Y": 64, "U": 65, "I": 66, "O": 67, "P": 68, "{": 69, "}": 70,
            "|": 71, "A": 72, "S": 73, "D": 74, "F": 75, "G": 76, "H": 77, "J": 78, "K": 79, "L": 80,
            ":": 81, '"': 82, "Z": 83, "X": 84, "C": 85, "V": 86, "B": 87, "N": 88, "M": 89, "<": 90,
            ">": 91, "?": 92, "ё": 93, "Ё": 94, "№": 95, "й": 96, "Й": 97, "ц": 98, "Ц": 99, "у": 100,
            "У": 101, "к": 102, "К": 103, "е": 104, "Е": 105, "н": 106, "Н": 107, "г": 108, "Г": 109, 
            "ш": 110, "Ш": 111, "щ": 112, "Щ": 113, "з": 114, "З": 115, "х": 116, "Х": 117, "ъ": 118,
            "Ъ": 119, "ф": 120, "Ф": 121, "ы": 122, "Ы": 123, "в": 124, "В": 125, "а": 126, "А": 127,
            "п": 128, "П": 129, "р": 130, "Р": 131, "о": 132, "О": 133, "л": 134, "Л": 135, "д": 136,
            "Д": 137, "ж": 138, "Ж": 139, "э": 140, "Э": 141, "я": 142, "Я": 143, "ч": 144, "Ч": 145,
            "с": 146, "С": 147, "м": 148, "М": 149, "и": 150, "И": 151, "т": 152, "Т": 153, "ь": 154,
            "Ь": 155, "б": 156, "Б": 157, "ю": 158, "Ю": 159, " ": 160, "«": 161, "»": 162, "—": 163,
            "–": 164, "“": 165, "”": 166, "\n": 167, "\\":168, "″": 169, "°": 170,
            0: "`", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "0",
            11: "-", 12: "=", 13: "q", 14: "w", 15: "e", 16:"r", 17: "t", 18: "y", 19: "u", 20: "i",
            21: "o", 22: "p", 23: "[", 24: "]", 25: "a", 26: "s", 27: "d", 28: "f", 29: "g", 30: "h",
            31: "j", 32: "k", 33: "l", 34: ";", 35: "'", 36: "z", 37: "x", 38: "c", 39: "v", 40: "b",
            41: "n", 42: "m", 43: ",", 44: ".", 45: "/", 46: "~", 47: "!", 48: "@", 49: "#", 50: "$",
            51: "%", 52: "^", 53: "&", 54: "*", 55: "(", 56: ")", 57: "_", 58: "+", 59: "Q", 60: "W",
            61: "E", 62: "R", 63: "T", 64: "Y", 65: "U", 66: "I", 67: "O", 68: "P", 69: "{", 70: "}",
            71: "|", 72: "A", 73: "S", 74: "D", 75: "F", 76: "G", 77: "H", 78: "J", 79: "K", 80: "L",
            81: ":", 82: '"', 83: "Z", 84: "X", 85: "C", 86: "V", 87: "B", 88: "N", 89: "M", 90: "<",
            91: ">", 92: "?", 93: "ё", 94: "Ё", 95: "№", 96: "й", 97: "Й", 98: "ц", 99: "Ц", 100: "у",
            101: "У", 102: "к", 103: "К", 104: "е", 105: "Е", 106: "н", 107: "Н", 108: "г", 109: "Г",
            110: "ш", 111: "Ш", 112: "щ", 113: "Щ", 114: "з", 115: "З", 116: "х", 117: "Х", 118: "ъ",
            119: "Ъ", 120: "ф", 121: "Ф", 122: "ы", 123: "Ы", 124: "в", 125: "В", 126: "а", 127: "А",
            128: "п", 129: "П", 130: "р", 131: "Р", 132: "о", 133: "О", 134: "л", 135: "Л", 136: "д",
            137: "Д", 138: "ж", 139: "Ж", 140: "э", 141: "Э", 142: "я", 143: "Я", 144: "ч", 145: "Ч",
            146: "с", 147: "С", 148: "м", 149: "М", 150: "и", 151: "И", 152: "т", 153: "Т", 154: "ь",
            155: "Ь", 156: "б", 157: "Б", 158: "ю", 159: "Ю", 160: " ", 161: "«", 162: "»", 163: "—",
            164: "–", 165: "“", 166: "”", 167: "\n", 168: "\\", 169: "″", 170: "°"
        };
    }

    start(data) {  
        if (data[3] === 0) {
            this._textSplitAndArray(data);
        } else if (data[3] === 1) {
            this._textSpliter(data);
        } 
    }

    _textSplitAndArray(data) {
        let arr1 = [];
        let text = data[0].split("");
        text.forEach((item) => {
            arr1.push(this._encryptionTableObject[item]);
        });
        return this._textAndPasswordLength(arr1, data);
    }
    
    _textAndPasswordLength(arr1, data) {
        let arr2 = [];
        let password = data[1].split("");
        for (let j = 0; j < arr1.length; j++) {
            for (let a = 0; a < password.length; a++) {
                if (arr1.length !== arr2.length) {
                    arr2.push(this._encryptionTableObject[password[a]]);
                }
            }
        }
        if (data[3] === 0) {
            return this._sumArr1AndArr2(arr1, arr2, data);
        } else {
            return this._raznostArr1AndArr2(arr1, arr2, data);
        }
        
    }
    
    _sumArr1AndArr2(arr1, arr2, data) {
        let array = [];
        for (let x = 0; x < arr1.length; x++) {
            array.push(arr1[x] + arr2[x]);
        }
        return this._hexEnter(array, data);
    }
    
    _hexEnter(array, data) {
        let hex;
        let array2 = [];
        for (let y = 0; y < array.length; y++) {
            hex = array[y];
            hex = hex.toString(16);
            if (hex.length === 1) {
                hex = `00${hex}`;
                array2.push(hex);
            } else if (hex.length === 2) {
                hex = `0${hex}`;
                array2.push(hex);
            }
        }
        return this._resultRender(array2, data);
    }

    _textSpliter(data) {
        let text = data[0].split(" ");
        return this._deshifratorHexOfText(text, data);
    }
    
    _deshifratorHexOfText(text, data) {
        let arr1 = [];
        let hex;
        for (let y = 0; y < text.length; y++) {
            hex = text[y];
            hex = parseInt(hex, 16);
            arr1.push(hex);
        }
        return this._textAndPasswordLength(arr1, data);
    }
    
    _raznostArr1AndArr2(arr1, arr2, data) {
        let array = [];
        for (let x = 0; x < arr1.length; x++) {
            array.push(arr1[x] - arr2[x]);
        }
        return this._characterConversion(array, data);
    }
    
    _characterConversion(array, data) {
        let array2 = [];
        array.forEach((item) => {
            array2.push(this._encryptionTableObject[item]);
        });
        return this._resultRender(array2, data);
    }

    _resultRender(array2, data) {
        let resultEnter = data[2];
        let result = array2.join(data[3] === 0 ? " " : "");
        resultEnter(result, data[3]);
    }
}