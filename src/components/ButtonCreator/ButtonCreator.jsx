import { useState } from "react";
import Frame from "../Frame/Frame";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Controller from "../Controller/Controller";
import ButtonDemo from "../ButtonDemo/ButtonDemo";
import Option from "../Option/Option";

function ButtonCreator() {
    const [checkboxesValues, setCheckboxesValues] = useState({
        isBold: false,
        isItalic: false,
    });

    const [values, setValues] = useState({
        title: 'Button',
        className: 'mybutton',
        fontFamily: 'Arial',
        fontSize: 14,
    });

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
        setValues({ ...values, [name]: value });
    }


    return (
        <main className="btn-creator">
            <Frame
            width={900}
            height={500}
            option={true}
            >
                <form className="btn-creator__form">
                    <h2 className="btn-creator__title">Текст</h2>
                    <section className="btn-creator__form-section">
                        <Input 
                        name="title"
                        placeholder="text: button"
                        onChange={handleChange}
                        defaultValue={values.title}
                        />
                        <Input
                        name="classname"
                        placeholder="classname: mybutton"
                        onChange={handleChange}
                        defaultValue={values.className}
                        />
                        <Select 
                        name="fontFamily"
                        onChange={handleChange}
                        defaultValue={values.fontFamily}
                        options={[ "Arial", "Georgia", "TimesNewRoman", "Impact" ]}
                        />

                        <Controller 
                        title="Font-size"
                        name="fontSize"
                        onChange={handleChange}
                        value={values.fontSize}
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
                    </section>
                </form>
                <Frame
                width={300}
                height={200}
                >
                    <ButtonDemo
                        title={values.title}
                        className={values.className}
                        style={{
                            fontSize: values.fontSize,
                            fontFamily: values.fontFamily,
                            isBold: checkboxesValues.isBold,
                            isItalic: checkboxesValues.isItalic,
                             
                        }}
                    />
                </Frame>
            </Frame>
        </main>

    )
}

export default ButtonCreator;