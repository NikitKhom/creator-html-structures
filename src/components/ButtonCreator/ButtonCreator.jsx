import { useState } from "react";
import { PropTypes } from 'prop-types';
import Frame from "../Frame/Frame";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Controller from "../Controller/Controller";
import ButtonDemo from "../ButtonDemo/ButtonDemo";
import Option from "../Option/Option";
import FormSection from "../FormSection/FormSection";
import HiddenFormSection from "../HiddenFormSection/HiddenFormSection";
import Radio from "../Radio/Radio";
import ColorSelect from "../ColorSelect/ColorSelect";

function ButtonCreator({ onSubmit, values, onChange, setValues }) {

    const [boxShadowMenu, setBoxShadowMenu] = useState(false);
    const [buttonTypeMenu, setButtonTypeMenu] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    function toggleBoxShadowMenu() {
        setBoxShadowMenu(!boxShadowMenu);
        setValues({
            ...values,
            boxShadowX: 0,
            boxShadowY: 0,
            blurRadius: 0,
            spreadRadius: 0,
            shadowColor: '#000000'
        });
    }

    function toggleButtonTypeMenu() {
        setButtonTypeMenu(!buttonTypeMenu);
        setValues({
            ...values,
            type: 'button'
        });
    }

    return (
        <main className="btn-creator">
            <Frame
            width={900}
            height={500}
            option={true}
            >
                <form
                className="btn-creator__form"
                id="btnForm"
                onSubmit={handleSubmit}
                >
                    <FormSection
                    title="Text"
                    rowsCount={3}
                    >
                        <Input 
                        name="title"
                        placeholder="text: button"
                        onChange={onChange}
                        defaultValue={values.title}
                        range={{
                            min: 1,
                            max: 15
                        }}
                        />
                        <Input
                        name="className"
                        placeholder="classname: mybutton"
                        onChange={onChange}
                        defaultValue={values.className}
                        />
                        <Select 
                        name="fontFamily"
                        onChange={onChange}
                        defaultValue={values.fontFamily}
                        options={[ "Arial", "Georgia", "TimesNewRoman", "Impact" ]}
                        />

                        <Controller 
                        title="Font-size"
                        name="fontSize"
                        onChange={onChange}
                        value={values.fontSize}
                        range={{ min: 8, max:28 }}
                        />

                        <Option 
                        optionsInfo={[
                            {title: "Bold",
                            name: "isBold",
                            defaultChecked: values.isBold
                            },
                            {title: "Italic",
                            name: "isItalic",
                            defaultChecked: values.isItalic
                            }
                        ]}
                        onChange={onChange}
                        />
                    </FormSection>
                    <FormSection
                    title="Size"
                    >
                        <Controller
                        title="Vertical Size"
                        name="verticalPadding"
                        onChange={onChange}
                        value={values.verticalPadding}
                        range={{ min: 0, max: 32 }}
                        />
                        <Controller
                        title="Horizontal Size"
                        name="horizontalPadding"
                        onChange={onChange}
                        value={values.horizontalPadding}
                        range={{ min: 0, max: 76 }}
                        />
                    </FormSection>
                    <FormSection
                    title="Border"
                    >
                        <Controller
                        title="Border Size"
                        name="borderSize"
                        onChange={onChange}
                        value={values.borderSize}
                        range={{ min: 0, max: 12 }}
                        />
                        <Controller
                        title="Border Radius"
                        name="borderRadius"
                        onChange={onChange}
                        value={values.borderRadius}
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
                        onChange={onChange}
                        value={values.boxShadowX}
                        range={{ min: -50, max: 50 }}
                        />
                        <Controller
                        title="Position X"
                        name="boxShadowY"
                        onChange={onChange}
                        value={values.boxShadowY}
                        range={{ min: -50, max: 50 }}
                        />
                        <Controller
                        title="Blur Radius"
                        name="blurRadius"
                        onChange={onChange}
                        value={values.blurRadius}
                        range={{ min: 0, max: 50 }}
                        />
                        <Controller
                        title="Spread Radius"
                        name="spreadRadius"
                        onChange={onChange}
                        value={values.spreadRadius}
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
                        onChange={onChange}
                        isChecked={values.type}
                        />
                        <Radio
                        title="Submit"
                        name="type"
                        value="submit"
                        onChange={onChange}
                        isChecked={values.type}
                        />
                        <Radio
                        title="Reset"
                        name="type"
                        value="reset"
                        onChange={onChange}
                        isChecked={values.type}
                        />
                        <Radio
                        title="Link"
                        name="type"
                        value="link"
                        onChange={onChange}
                        isChecked={values.type}
                        />
                    </HiddenFormSection>
                </form>
                <div className="btn-creator__demo">
                    <ColorSelect
                    colorsInfo={[
                        {
                        title: "Text",
                        name: "textColor",
                        value: values.textColor,
                        isVisible: true,
                        },
                        {
                        title: "Background",
                        name: "buttonColor",
                        value: values.buttonColor,
                        isVisible: true,
                        },
                        {
                        title: "Border",
                        name: "borderColor",
                        value: values.borderColor,
                        isVisible: true,
                        },
                        {
                        title: "Shadow",
                        name: "shadowColor",
                        value: values.shadowColor,
                        isVisible: boxShadowMenu,
                        },
                    ]}
                    onChange={onChange}
                    />
                    <ButtonDemo
                        values={values}
                    />
                    <button
                    className="btn-crator__submit"
                    type="submit"
                    form="btnForm"
                    >
                        Get Code
                    </button>
                </div>
                

            </Frame>
        </main>

    )
}

ButtonCreator.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    setValues: PropTypes.func
}

export default ButtonCreator;