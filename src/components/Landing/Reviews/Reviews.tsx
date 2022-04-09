import React, { useRef, useEffect } from "react";
import ReviewCard from "./ReviewCard";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  // @ts-ignore
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import { Box, Heading, Text, Tag, Button } from "@chakra-ui/react";

export default function Reviews() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_4",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_4",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_4",
      },
    });
  });

  const responsive = {
    0: {
      items: 1.1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  };

  return (
    <Box
      id="reviews"
      pb="50px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      // maxW={"min(100%,1950px)"}
      mx="auto"
      position="relative"
    >
      <Box textAlign="center" mb="5rem" mt="4rem">
        <Tag
          color="white"
          size="lg"
          borderRadius="1.4rem"
          fontSize={{ sm: "xs", lg: "sm" }}
          py="10px"
          px="20px"
          bgColor="rgba(255, 255, 255, 0.5)"
          fontWeight="medium"
          ref={tagRef}
        >
          REVIEWS
        </Tag>

        <Heading
          color="white"
          fontSize={{ sm: "xl", lg: "3xl" }}
          my="1.2rem"
          className="trigger_4"
          ref={headRef}
        >
          Spurt! loved by all users
        </Heading>

        <Text
          color="white"
          fontSize={{ sm: "xs", lg: "sm" }}
          fontWeight="normal"
          lineHeight="1.5rem"
          ref={textRef}
        >
          See how much they love our product and give positive response about
          <br />
          what our to do for make their problem solved.
        </Text>
      </Box>

      <OwlCarousel
        className="owl-theme"
        loop
        margin={30}
        nav={false}
        dots={false}
        autoplay={true}
        fluidSpeed={3000}
        autoplayTimeout={6000}
        autoplaySpeed={2000}
        animateIn={true}
        smartSpeed={400}
        responsive={responsive}
      >
        {reviewsData.map((review: any) => (
          <Box key={review.id}>
            <ReviewCard review={review} />
          </Box>
        ))}
      </OwlCarousel>

      <Box mt="3rem">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          nav={false}
          dots={false}
          autoplay={true}
          fluidSpeed={3000}
          autoplayTimeout={5000}
          autoplaySpeed={2000}
          animateIn={true}
          responsive={responsive}
        >
          {reviewsData.map((review: any) => (
            <div key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </OwlCarousel>
      </Box>
    </Box>
  );
}

const reviewsData = [
  {
    id: 1,
    image: "/images/avatar.png",
    name: "Hemchandra Chakravorty",
    location: "Copenhagen, Denmark",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
  {
    id: 2,
    image: "/images/avatar.png",
    name: "Nonkosi Joyi",
    location: "Hangzhou, China",
    review: "“Exercitationem et autem. Sunt rerum voluptatem et soluta.”",
  },
  {
    id: 3,
    image: "/images/avatar.png",
    name: "Amarachi Nkechi",
    location: "Cardiff, North Ireland",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
  {
    id: 4,
    image: "/images/avatar.png",
    name: "Hemchandra Chakravorty",
    location: "Copenhagen, Denmark",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
];
