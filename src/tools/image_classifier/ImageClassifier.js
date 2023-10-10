import React, { useEffect, useState } from 'react'
import './ImageClassifier.css';
import '../../App.css';

export default function ImageClassifier() {
    const [imageSelected, setImageSelected] = useState(null);
    const [predictions, setpredictions] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function doitnaw() {
            if (imageSelected !== null) {
                setLoading(true);
                var tf = require('@tensorflow/tfjs');
                const mobilenet = require('@tensorflow-models/mobilenet');
                const img = document.getElementById('main_image');
                const model = await mobilenet.load();
                const predictions = await model.classify(img);
                setpredictions(predictions);
                setLoading(false)
            }
            else {
                setpredictions(null);
            }
        }
        doitnaw();
    }, [imageSelected]);

    function loadImage(event) {
        console.log(event.target.files[0]);
        setImageSelected(event.target.files[0]);
    }

    function downloadImage(){
        URL.createObjectURL(imageSelected);
    }
    return (
        <div className="image_container">
            {!loading && imageSelected && <img className="uploaded_image" id="main_image" alt='Whooopss!!'
                src={URL.createObjectURL(imageSelected)}></img>}
            {!loading && imageSelected && <div className="buttons">
                <button onClick={() => setImageSelected(null)}>Remove</button>    
            </div>}
            {!loading && imageSelected && predictions &&
                <div className="pred_1">{predictions[0]['className']}</div>
            }
            {!loading && !imageSelected && <label className="upload_label">
                <input className="upload_button" type="file" onChange={loadImage} />
                Upload
            </label>}
            {loading && <div>Loading</div>}
        </div>
    )
}
