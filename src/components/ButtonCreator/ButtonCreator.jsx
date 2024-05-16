import { useState } from "react";
import Frame from "../Frame/Frame";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Controller from "../Controller/Controller";
import ButtonDemo from "../ButtonDemo/ButtonDemo";
import Option from "../Option/Option";
import FormSection from "../FormSection/FormSection";
import HiddenFormSection from "../HiddenFormSection/HiddenFormSection";
import Radio from "../Radio/Radio";

function ButtonCreator() {
    const initialBoxShadowValues = {
        boxShadowX: 0,
        boxShadowY: 0,
        blurRadius: 0,
        spreadRadius: 0,
    };

    const [buttonType, setButtonType] = useState('button');
    const [boxShadowMenu, setBoxShadowMenu] = useState(false);
    const [buttonTypeMenu, setButtonTypeMenu] = useState(false);
    const [checkboxesValues, setCheckboxesValues] = useState({
        isBold: false,
        isItalic: false,
        isInset: false,
    });
    const [requiredValues, setRequiredValues] = useState({
        title: 'Button',
        className: 'mybutton',
        fontFamily: 'Arial',
        fontSize: 17,
        verticalPadding: 16,
        horizontalPadding: 31,
        borderRadius: 21,
        borderSize: 1,
    });
    const [boxShadowValues, setBoxShadowValues] = useState({
        boxShadowX: 0,
        boxShadowY: 0,
        blurRadius: 0,
        spreadRadius: 0,
    });

    function toggleBoxShadowMenu() {
        setBoxShadowMenu(!boxShadowMenu);
        setTimeout(() => {
            setBoxShadowValues(initialBoxShadowValues);
        }, 500);
    }

    function toggleButtonTypeMenu() {
        setButtonTypeMenu(!buttonTypeMenu);
        setTimeout(() => {
            setButtonType('button');
        }, 500);
    }

    function handleChangeCheckbox(e) {
        const checkbox = e.target;
        const name = checkbox.name;
        const isChecked = checkbox.checked;
        setCheckboxesValues({...checkboxesValues, [name]: isChecked})
    }

    function handleChange(e) {
        const input = e.target;
        const value = input.value;
        const name = input.name;
        setRequiredValues({ ...requiredValues, [name]: value });
    }

    function handleChangeBoxShadow(e) {
        const input = e.target;
        const value = input.value;
        const name = input.name;
        setBoxShadowValues({ ...boxShadowValues, [name]: value });
    }

    function handleChangeButtonType(e) {
        setButtonType(e.target.value);
    }

    return (
        <main className="btn-creator">
            <Frame
            width={900}
            height={500}
            option={true}
            >
                <form className="btn-creator__form">
                    <FormSection
                    title="Текст"
                    rowsCount={3}
                    >
                        <Input 
                        name="title"
                        placeholder="text: button"
                        onChange={handleChange}
                        defaultValue={requiredValues.title}
                        range={{
                            min: 1,
                            max: 15
                        }}
                        />
                        <Input
                        name="classname"
                        placeholder="classname: mybutton"
                        onChange={handleChange}
                        defaultValue={requiredValues.className}
                        />
                        <Select 
                        name="fontFamily"
                        onChange={handleChange}
                        defaultValue={requiredValues.fontFamily}
                        options={[ "Arial", "Georgia", "TimesNewRoman", "Impact" ]}
                        />

                        <Controller 
                        title="Font-size"
                        name="fontSize"
                        onChange={handleChange}
                        value={requiredValues.fontSize}
                        range={{ min: 8, max:28 }}
                        />

                        <Option 
                        optionsInfo={[
                            {title: "Bold",
                            name: "isBold",
                            defaultChecked: checkboxesValues.isBold
                            },
                            {title: "Italic",
                            name: "isItalic",
                            defaultChecked: checkboxesValues.isItalic
                            }
                        ]}
                        onChange={handleChangeCheckbox}
                        />
                    </FormSection>
                    <FormSection
                    title="Size"
                    >
                        <Controller
                        title="Vertical Size"
                        name="verticalPadding"
                        onChange={handleChange}
                        value={requiredValues.verticalPadding}
                        range={{ min: 0, max: 32 }}
                        />
                        <Controller
                        title="Horizontal Size"
                        name="horizontalPadding"
                        onChange={handleChange}
                        value={requiredValues.horizontalPadding}
                        range={{ min: 0, max: 76 }}
                        />
                    </FormSection>
                    <FormSection
                    title="Border"
                    >
                        <Controller
                        title="Border Size"
                        name="borderSize"
                        onChange={handleChange}
                        value={requiredValues.borderSize}
                        range={{ min: 0, max: 12 }}
                        />
                        <Controller
                        title="Border Radius"
                        name="borderRadius"
                        onChange={handleChange}
                        value={requiredValues.borderRadius}
                        range={{ min: 0, max: 50 }}
                        />
                    </FormSection>
                    <HiddenFormSection
                    title="Box Shadow"
                    isVisible={boxShadowMenu}
                    onClick={toggleBoxShadowMenu}
                    rowsCount={4}
                    >
                        <Controller
                        title="Position Y"
                        name="boxShadowX"
                        onChange={handleChangeBoxShadow}
                        value={boxShadowValues.boxShadowX}
                        range={{ min: -50, max: 50 }}
                        />
                        <Controller
                        title="Position X"
                        name="boxShadowY"
                        onChange={handleChangeBoxShadow}
                        value={boxShadowValues.boxShadowY}
                        range={{ min: -50, max: 50 }}
                        />
                        <Controller
                        title="Blur Radius"
                        name="blurRadius"
                        onChange={handleChangeBoxShadow}
                        value={boxShadowValues.blurRadius}
                        range={{ min: 0, max: 50 }}
                        />
                        <Controller
                        title="Spread Radius"
                        name="spreadRadius"
                        onChange={handleChangeBoxShadow}
                        value={boxShadowValues.spreadRadius}
                        range={{ min: 0, max: 50 }}
                        />
                    </HiddenFormSection>
                    <HiddenFormSection
                    title="Button Type"
                    isVisible={buttonTypeMenu}
                    onClick={toggleButtonTypeMenu}
                    rowsCount={2}
                    >
                        <Radio
                        title="Button"
                        name="type"
                        value="button"
                        onChange={handleChangeButtonType}
                        isChecked={buttonType}
                        />
                        <Radio
                        title="Submit"
                        name="type"
                        value="submit"
                        onChange={handleChangeButtonType}
                        isChecked={buttonType}
                        />
                        <Radio
                        title="Reset"
                        name="type"
                        value="reset"
                        onChange={handleChangeButtonType}
                        isChecked={buttonType}
                        />
                        <Radio
                        title="Link"
                        name="type"
                        value="link"
                        onChange={handleChangeButtonType}
                        isChecked={buttonType}
                        />
                    </HiddenFormSection>
                </form>
                <div className="btn-creator__demo">
                    <ButtonDemo
                        title={requiredValues.title}
                        className={requiredValues.className}
                        style={{
                            fontSize: requiredValues.fontSize,
                            fontFamily: requiredValues.fontFamily,
                            isBold: checkboxesValues.isBold,
                            isItalic: checkboxesValues.isItalic,
                            verticalPadding: requiredValues.verticalPadding,
                            horizontalPadding: requiredValues.horizontalPadding,
                            borderRadius: requiredValues.borderRadius,
                            borderSize: requiredValues.borderSize,
                        }}
                        boxShadowStyle={{
                            boxShadowX: boxShadowValues.boxShadowX,
                            boxShadowY: boxShadowValues.boxShadowY,
                            blurRadius: boxShadowValues.blurRadius,
                            spreadRadius: boxShadowValues.spreadRadius,
                        }}
                    />
                </div>
                

            </Frame>
        </main>

    )
}

export default ButtonCreator;