import React,{useState} from 'react';
export default function TextForm(props)
{
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick = ()=>{
        let newText="";
        setText(newText);
        props.showAlert(" clear!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard!","success");
    }
    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space!","success");
    }
    const[text,setText]=useState("")
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8" cols="100"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert To Upper</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert To Lower</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-primary mx-2 my-1' onClick={copyText}>Copy</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleSpace}>Space Remover</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}