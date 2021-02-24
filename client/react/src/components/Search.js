import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import history from '../History'
function Search (props) {
    const location = useLocation();
    console.log(location);
    const searchResults = (data) => {
        props.searchResults(data);
    }
    const [brandButton, setBrandButton] = useState(false);
    const [batteryButton, setBatteryButton] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);
    const [rearCameraButton, setRearCameraButton] = useState(false);
    const [processorButton, setProcessorButton] = useState(false);
    const [frontCameraButton, setFrontCameraButton] = useState(false);
    const [priceButton, setPriceButton] = useState(false)


    const [minPrice, setMinPrice] = useState(['0', '20', '40', '60', '100', '200', '400', '800'])
    const [brands, setBrands] = useState([]);
    const [batteryCapacity, setBatteryCapacity] = useState([]);
    const [display, setDisplay] = useState([])
    const [rearCamera, setRearCamera] = useState([]);
    const [frontCamera, setFrontCamera] = useState([]);
    const [processor, setProcessor] = useState([])
    useEffect((props) => {
        axios.get('http://localhost:5000/api/smartphone')
            .then(response => {
                const data = response.data.unique;
                setBrands(data.brand)
                setBatteryCapacity(data.batteryCapacity)
                setDisplay(data.display)
                setRearCamera(data.rearCamera)
                setFrontCamera(data.frontCamera)
                setProcessor(data.processor)
            })
    }, []);
    const [searchForm, setSearchForm] = useState({
        brand: undefined,
        batteryCapacity: undefined,
        display: undefined,
        frontCamera: undefined,
        image: undefined,
        phoneModel: undefined,
        price: undefined,
        processor: undefined,
        rearCamera: undefined
    })
    const onChange = (event) => {
        console.log([event.target.name])
        setSearchForm({ ...searchForm, [event.target.name]: event.target.value })
    }
    const onClick = () => {
        console.log(searchForm)
        
            axios.post('http://localhost:5000/api/smartphone/searchquery', searchForm)
                .then(response => {
                    props.searchResults(response.data.smartphone);
                })
        
    }
    useEffect(() => {
        console.log(searchForm)
    }
        , [searchForm])

    return (

        <div style={{ width: "90%" }}>

            <div class="btn-toolbar " >
                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setBrandButton(!brandButton)
                    if (brandButton) { setSearchForm({ ...searchForm, "brand": undefined }) }
                }}>Brand</Button>

                <Button type="button " className="ml-2" size="lg" onClick={() => {
                    setBatteryButton(!batteryButton)
                    if (batteryButton) { setSearchForm({ ...searchForm, "batteryCapacity": undefined }) }
                }}>Battery</Button>

                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setDisplayButton(!displayButton)
                    if (batteryButton) { setSearchForm({ ...searchForm, "display": undefined }) }
                }}>Display</Button>

                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setRearCameraButton(!rearCameraButton)
                    if (rearCameraButton) { setSearchForm({ ...searchForm, "rearCamera": undefined }) }
                }}>Rear Camera</Button>

                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setProcessorButton(!processorButton)
                    if (processorButton) { setSearchForm({ ...searchForm, "processor": undefined }) }
                }}>Processor</Button>

                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setFrontCameraButton(!frontCameraButton)
                    if (frontCameraButton) { setSearchForm({ ...searchForm, "frontCamera": undefined }) }
                }}>FrontCamera</Button>

                <Button type="button" className="ml-2" size="lg" onClick={() => {
                    setPriceButton(!priceButton)
                    if (priceButton) { setSearchForm({ ...searchForm, "price": undefined }) }
                }}>Price</Button>

                <Button type="button" className="ml-2" size="lg" variant="success" onClick={onClick} >Search</Button>

            </div>

            <div className="row">
                {brandButton &&
                    <div className="col-lg-2">
                        <label>Brand</label>
                        <select
                            name='brand'
                            value={searchForm.brand}
                            onChange={onChange}
                            style={{ width: "100%", marginBottom: "30px" }}
                        >
                            {brands.map((item, i) => <option value={item} key={i} >{item}</option>)}
                        </select>
                    </div>
                }
                {batteryButton && <div className="col-lg-2">
                    <label>Battery Capacity</label>
                    <select
                        name='batteryCapacity'
                        value={searchForm.batteryCapacity}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {batteryCapacity.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>
                }
                {displayButton && <div className="col-lg-2">
                    <label>Display</label>
                    <select
                        name='display'
                        value={searchForm.display}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {display.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>
                }

                {rearCameraButton && <div className="col-lg-2">
                    <label>Rear Camera</label>
                    <select
                        name='rearCamera'
                        value={searchForm.rearCamera}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {rearCamera.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>
                }

                {processorButton && <div className="col-lg-2">
                    <label>Processor</label>
                    <select
                        name='processor'
                        value={searchForm.Processor}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {processor.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>
                }
                {frontCameraButton && <div className="col-lg-2">
                    <label>FrontCamera</label>
                    <select
                        name='frontCamera'
                        value={searchForm.frontCamera}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {frontCamera.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>}
                {priceButton && <div className="col-lg-2">
                    <label>Price</label>
                    <select
                        name='price'
                        value={searchForm.price}
                        onChange={onChange}
                        style={{ width: "100%", marginBottom: "30px" }}
                    >
                        {minPrice.map((item, i) => <option value={item} key={i} >{item}</option>)}
                    </select>
                </div>}
            </div>
        </div>
    )
}
export default Search;