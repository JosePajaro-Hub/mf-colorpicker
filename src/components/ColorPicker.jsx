import React, { useState } from "react";

const ColorPicker = ()=> {

    const [color, setColor] =useState("#000000");
    const handleChangeColor = (e) => {
        setColor (e.target.value)
    }

    const handleSubmitColor = (e) => {
        e.preventDefault();
        alert(color)
    }
    return <form onSubmit={handleSubmitColor}>
        <input type="color" className="form-control" style={{
            width: "100%", 
            height: "300px"
        }}
        title="Selecione el color..."
        onChange={handleChangeColor}></input>
        <div className="text-center">
            <h2 className="mt-3 fw-bolder">
                <div style={{
                    width: "20px",
                    height: "20px", 
                    background: color, 
                    display: "inline-block", 
                    margin: "0 1rem",
                    borderRadius: "100%"
                }}></div>
                {color}

            </h2>
            <button type="submit"
            className="btn btn-succes">Guardar color</button>
        </div>
    </form>
}

export default ColorPicker;