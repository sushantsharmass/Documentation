import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrolltracker = document.querySelector(".scrolltracker")

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    scrollOffsets: [CSS.percent(0),CSS.percent(100)],
});

scrolltracker.animate(
    {
        transform:["scaleX(0)" , "scaleX(1)"],
    },
    {
        duration:1,
        timeline:scrollTrackingTimeline
    }
);