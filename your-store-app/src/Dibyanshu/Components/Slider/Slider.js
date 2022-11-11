import { Component } from "react"
import "./Slider.css"
import { FaAngleLeft , FaAngleRight } from 'react-icons/fa';
class Slider extends Component {
    
    constructor(){
        super()
        this.state = {
            index: 1,
        }
        this.plusSlides = this.plusSlides.bind(this)
        this.prevSlides = this.prevSlides.bind(this)
    }
    componentDidMount(){
        setInterval(
            this.plusSlides,
            3000
        )
    }
    plusSlides(){
        let index = this.state.index + 1
        if(index < 6){
            this.setState({index: index})   
        }else {
            this.setState({index: 1})
        }
    }
    prevSlides(){
        let index = this.state.index - 1
        if(index > 1 ){
            this.setState({index: index})   
        }else{
            this.setState({index: 5})
        }
    }
    render(){

        return (
            <div className="slide_container my_8">

                <div className={`slides ${this.state.index == 1 ? "fade": ""}`}>
                    <img src="https://images-static.nykaa.com/uploads/b8ef00c0-346a-4718-a1b6-4648f7a8be7c.jpg?tr=w-1200,cm-pad_resize" />
                </div>
        
                <div className={`slides ${this.state.index == 2 ? "fade": ""}`}>
                    <img src="https://images-static.nykaa.com/uploads/cc78b00c-5021-4729-baf6-91989b3ef61d.jpg?tr=w-1200,cm-pad_resize" />
                </div>
        
                <div className={`slides ${this.state.index == 3 ? "fade": ""}`}>
                    <img src="https://images-static.nykaa.com/uploads/b8bc5e20-0e67-4adc-9e02-293920649b99.jpg?tr=w-1200,cm-pad_resize" />
                </div>
                <div className={`slides ${this.state.index == 4 ? "fade": ""}`}>
                    <img src="https://images-static.nykaa.com/uploads/ceacdf9a-cf81-4c29-8da3-e115292c4135.gif?tr=w-1200,cm-pad_resize" />
                </div>
                <div className={`slides ${this.state.index == 5 ? "fade": ""}`}>
                    <img src="https://images-static.nykaa.com/uploads/b8c52286-7fbc-4802-a30b-d74c77579f54.jpg?tr=w-1200,cm-pad_resize" />
                </div>
                
                <a className="left_arrow" onClick={this.prevSlides}>
                    <FaAngleLeft/>
                </a>
                <a className="right_arrow" onClick={this.plusSlides}>
                <FaAngleRight/>
                </a>
    
            </div>
        )
    }
}

export default Slider;