import React from "react";
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

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import { Box, Heading, Text, Tag, Button } from "@chakra-ui/react";

export default function Reviews() {
  const responsive = {
    0: {
      items: 1,
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
      bgColor="brand.400"
      pb="50px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1950px)"}
      mx="auto"
      position="relative"
    >
      {/* top curve svg */}
      <Box
        transform="rotate(180deg)"
        position="absolute"
        top="-1px"
        left="0px"
        w="100%"
      >
        <svg
          id="bigHalfCircle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          fill="white"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      {/* bottom curve svg */}
      <Box
        position="absolute"
        bottom="-1px"
        left="0px"
        w="100%"
        h={{ sm: "50px", xl: "100px" }}
      >
        <svg
          id="bigHalfCircle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="white"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      <Box textAlign="center" mb="5rem" mt="4rem">
        <Tag
          color="white"
          size="lg"
          borderRadius="1.4rem"
          fontSize="sm"
          py="10px"
          px="20px"
          bgColor="rgba(255, 255, 255, 0.5)"
          fontWeight="medium"
        >
          REVIEWS
        </Tag>

        <Heading color="white" fontSize="3xl" my="1.2rem">
          Spurt! loved by all users
        </Heading>

        <Text
          color="white"
          fontSize="sm"
          fontWeight="normal"
          lineHeight="1.5rem"
        >
          See how much they love our product and give positive response about
          <br />
          what our to do for make their problem solved.
        </Text>

        <Button
          mt="2.5rem"
          bg=" linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)"
          color="white"
          borderColor="#ff5e4b"
          borderWidth="2px"
          fontWeight="normal"
          fontSize="sm"
          px="1rem"
          py="1.2rem"
          _hover={{ bg: "linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)" }}
          _active={{ bg: "linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)" }}
          _focus={{ outline: "none" }}
        >
          Read all Reviews
        </Button>
      </Box>
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
        smartSpeed={400}
        responsive={responsive}
      >
        {reviewsData.map((review: any) => (
          <Box key={review.name}>
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
          autoplayTimeout={4000}
          autoplaySpeed={2000}
          animateIn={true}
          responsive={responsive}
        >
          {reviewsData.map((review: any) => (
            <div key={review.name}>
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
    image: "/images/avatar.png",
    name: "Hemchandra Chakravorty",
    location: "Copenhagen, Denmark",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
  {
    image: "/images/avatar.png",
    name: "Nonkosi Joyi",
    location: "Hangzhou, China",
    review: "“Exercitationem et autem. Sunt rerum voluptatem et soluta.”",
  },
  {
    image: "/images/avatar.png",
    name: "Amarachi Nkechi",
    location: "Cardiff, North Ireland",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
  {
    image: "/images/avatar.png",
    name: "Hemchandra Chakravorty",
    location: "Copenhagen, Denmark",
    review:
      "I know in real-time where the money is spent, and I don’t have to use company’s credit card anymore. What a relief!",
  },
];
