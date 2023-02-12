import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Slide } from "react-awesome-reveal";

function Faq() {
  return (
    <div id="faq" className="w-full min-h-screen">
      <div className="w-full max-w-[1200px] flex flex-col gap-6 justify-start items-center m-auto h-full px-6 md:px-4">
        <Slide direction="down" triggerOnce={true}>
          <h1 className="text-[60px] md:text-[86px] font-Playfair font-semibold leading-[78px] text-white mb-10 md:mb-20">
            Faqs
          </h1>
        </Slide>
        {/* ==================== */}
        {FaqData.map((item, index) => {
          return (
            <Slide direction="left" triggerOnce={true}>
              <Accordion
                sx={{
                  "&.MuiPaper-root": {
                    background: "#58805a",
                    borderRadius: "30px",
                    p: 1,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="uppercase text-[20px] font-OpenSans text-white w-full h-full flex justify-start items-center">
                    {item.ques}
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className=" text-white text-[24px] font-OpenSans w-full h-full font-normal flex justify-start items-center">
                    {item.ans}
                  </p>
                </AccordionDetails>
              </Accordion>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}

const FaqData = [
  {
    ques: "   How much is a fat nft?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "Where can i view my fat ape nfts?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "will there be a presale?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: " when will we be able to mint fast apes?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "what can i do with my fate ape?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "are there secondary sale royalties?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
  {
    ques: "do i won the fat ape after minting it?",
    ans: " The Public Sale starts on November 1st, 2021, at 9 PM EST. Price Starts at 0.3 ETH + gas for 6 hours. If the collection is not soldout by then, price drops to 0.25 ETH + gas after the initial 6 hours. If the collection is still not sold out after those 12 hours, the rest of the Fat Apes are sold at 0.2 ETH + gas.",
  },
];

export default Faq;
