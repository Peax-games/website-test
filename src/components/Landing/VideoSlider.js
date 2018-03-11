import React, { Component } from 'react';

export default class VideoSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: ['https://www.youtube.com/embed/IpqYfWKOZtE?rel=0&controls=0&showinfo=0&autoplay=1&loop=1&modestbranding=1', 'https://www.youtube.com/embed/CjustgpgebA?rel=0&controls=0&showinfo=0&autoplay=1&loop=1', 'https://www.youtube.com/embed/YNeMI78L9V0?rel=0&controls=0&showinfo=0&autoplay=1&loop=1'],
            cur: 0,
            dots: '',
            vids: '',
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
    }
    componentDidMount() {

        const CIRCLES = {
            cursor: 'pointer',
            height: '15px',
            width: '15px',
            margin: '2px 2px',
            backgroundColor: '#bbb',
            borderRadius: '50%',
            display: 'inline-block',
            textAlign: 'center',
        };

        const VIDSSLIDER = this.state.slider.map((x, i) => {
            return (
                <iframe key={i} height='600px' width='100%' src={x}></iframe>
            )
        })
        const DOTS = this.state.slider.map((x, i) => {

            return (
                <span key={i} style={CIRCLES} onClick={() => this.currentSlide(i)}></span>
            )
        })
        const intervalTime = setInterval(this.slideRight, 7000)
        this.setState({ dots: DOTS, vids: VIDSSLIDER, intervalTime })
    }
    componentWillUnmount() {
        return clearInterval(this.state.intervalTime);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({
                cur: this.state.vids.length - 1
            })
        } else {
            return this.setState({
                cur: this.state.cur - 1
            })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.vids.length - 1) {
            return this.setState({
                cur: 0
            })
        } else {
            return this.setState({
                cur: this.state.cur + 1
            })
        }
    }
    currentSlide(x) {
        this.setState({ cur: x })
    }
    render() {
        const MAINWRAPPER = {
            width: '100%',
            height: '600px',
            overflow: 'hidden',

        }
        const CIRCLESDIV = {
            textAlign: 'center',
            width: '100%',
            position: 'relative',
        }
        return (
            <div style={MAINWRAPPER}>
                <div>
                    {this.state.vids[this.state.cur]}
                </div>
                <div style={CIRCLESDIV}>
                    {this.state.dots}
                </div>
            </div>
        )
    }
}