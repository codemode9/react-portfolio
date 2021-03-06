import React, { Component } from "react";
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import './Portfolio.css';


const items = [
    {
      src: require('../../images/wdywte.png'),
      altText: 'Slide 1',
      caption: 'What do you want to eat?'
    },
    {
      src: require('../../images/dispenser.png'),
      altText: 'Slide 2',
      caption: 'Dispensary App'
    },
    {
      src: require('../../images/hothornot.png'),
      altText: 'Slide 3',
      caption: 'Hoth or Not'
    },
    {
        src: require('../../images/porto.png'),
        altText: 'Slide 4',
        caption: 'This Portfolio! (inception?)'
      }
  ];
  
  class Portfolio extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
        );
      });
  
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          className="caro"
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }
  
  
  export default Portfolio;