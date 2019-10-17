let positionAscii;
let positionAsciiChanged;
let charPositionAsciiChanged;

let newDataDecode = '';
let newDataEncode = '';
window.cipher = {
    encode: (dataInformant, offsetInformant) => {
        newDataEncode = '';
        for (let i = 0; i < dataInformant.length; i++) {
            positionAscii = dataInformant.charCodeAt(i);
            if (positionAscii >= 65 && positionAscii <= 90) {
                positionAsciiChanged = (positionAscii - 65 + parseInt(offsetInformant)) % 26 + 65;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataEncode += charPositionAsciiChanged;
            } else if (positionAscii >= 97 && positionAscii <= 122) {
                positionAsciiChanged = (positionAscii - 97 + parseInt(offsetInformant)) % 26 + 97;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataEncode += charPositionAsciiChanged;
            } else if (positionAscii >= 48 && positionAscii <= 57) {
                positionAsciiChanged = (positionAscii - 48 + parseInt(offsetInformant)) % 10 + 48;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataEncode += charPositionAsciiChanged;
            } else {
                newDataEncode += String.fromCharCode(positionAscii);
            }
        }
        return newDataEncode;
    },

    decode: (name, offsetDenounced) => {
        newDataDecode = '';
        for (let i = 0; i < name.length; i++) {
            positionAscii = name.charCodeAt(i);
            if (positionAscii >= 65 && positionAscii <= 90) {
                positionAsciiChanged = (positionAscii - 90 - parseInt(offsetDenounced)) % 26 + 90;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataDecode += charPositionAsciiChanged;
            } else if (positionAscii >= 97 && positionAscii <= 122) {
                positionAsciiChanged = (positionAscii - 122 - parseInt(offsetDenounced)) % 26 + 122;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataDecode += charPositionAsciiChanged;
            } else if (positionAscii >= 48 && positionAscii <= 57) {
                positionAsciiChanged = ((positionAscii - 57 - parseInt(offsetDenounced)) % 10) + 57;
                charPositionAsciiChanged = String.fromCharCode(positionAsciiChanged);
                newDataDecode += charPositionAsciiChanged;
            } else {
                newDataDecode += String.fromCharCode(positionAscii);
            }
        }
        return newDataDecode;
    }
};