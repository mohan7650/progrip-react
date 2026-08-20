import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Shared/Button.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import "./ProductSection.css";

import proGripBox from "../../assets/images/product-section/Pro Grip Box Image.png";

export const PRODUCTS = [
  { id: 1, stockCode: "DRP6100", name: 'PROGRIP #6 x 1" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#6", length: '1"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "13.7", popular: false, slug: "/products/progrip-6-x-1-fine-thread-drywall-screw-drp6100" },
  { id: 2, stockCode: "DRP6118", name: 'PROGRIP #6 x 1-1/8" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#6", length: '1-1/8"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "14.7", popular: true, slug: "/products/progrip-6-x-1-1-8-fine-thread-drywall-screw-drp6118" },
  { id: 3, stockCode: "DRP6114", name: 'PROGRIP #6 x 1-1/4" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 8000, weightPerBox: "13.5", popular: true, slug: "/products/progrip-6-x-1-1-4-fine-thread-drywall-screw-drp6114" },
  { id: 4, stockCode: "DRP6158", name: 'PROGRIP #6 x 1-5/8" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#6", length: '1-5/8"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "10.25", popular: true, slug: "/products/progrip-6-x-1-5-8-fine-thread-drywall-screw-drp6158" },
  { id: 5, stockCode: "DRP6200", name: 'PROGRIP #6 x 2" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#6", length: '2"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 3500, weightPerBox: "8.87", popular: true, slug: "/products/progrip-6-x-2-fine-thread-drywall-screw-drp6200" },
  { id: 6, stockCode: "DRP8212", name: 'PROGRIP #8 x 2-1/2" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#8", length: '2-1/2"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 2500, weightPerBox: "10.81", popular: false, slug: "/products/progrip-8-x-2-1-2-fine-thread-drywall-screw-drp8212" },
  { id: 7, stockCode: "DRP8300", name: 'PROGRIP #8 x 3" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#8", length: '3"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 2000, weightPerBox: "10.21", popular: true, slug: "/products/progrip-8-x-3-fine-thread-drywall-screw-drp8300" },
  { id: 8, stockCode: "DRP10312", name: 'PROGRIP #10 x 3-1/2" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#10", length: '3-1/2"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "8.31", popular: false, slug: "/products/progrip-10-x-3-1-2-fine-thread-drywall-screw-drp10312" },
  { id: 9, stockCode: "DRP10600", name: 'PROGRIP #10 x 6" Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Drywall Screw", gauge: "#10", length: '6"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "13.81", popular: false, slug: "/products/progrip-10-x-6-fine-thread-drywall-screw-drp10600" },
  { id: 10, stockCode: "DRWP7716", name: 'PROGRIP #7 x 7/16" Sharp Point Framing Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Framing Screw", gauge: "#7", length: '7/16"', threadType: "Fine", pointType: "Sharp Point", headType: "Pan Framer Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 15000, weightPerBox: "18.2", popular: true, slug: "/products/progrip-7-x-7-16-sharp-point-framing-screw-drwp7716" },
  { id: 11, stockCode: "DRWP7916", name: 'PROGRIP #7 x 9/16" Sharp Point Framing Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Framing Screw", gauge: "#7", length: '9/16"', threadType: "Fine", pointType: "Sharp Point", headType: "Wafer Head - Modified Truss", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "18.1", popular: true, slug: "/products/progrip-7-x-9-16-sharp-point-framing-screw-drwp7916" },
  { id: 12, stockCode: "DRP6114S", name: 'PROGRIP #6 x 1-1/4" Collated Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Collated Screws", application: "Drywall to Metal", screwType: "Collated Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: true, slug: "/products/progrip-6-x-1-1-4-collated-fine-thread-drywall-screw-drp6114s" },
  { id: 13, stockCode: "DRP6200S", name: 'PROGRIP #6 x 2" Collated Fine Thread Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Collated Screws", application: "Drywall to Metal", screwType: "Collated Drywall Screw", gauge: "#6", length: '2"', threadType: "Fine", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: true, slug: "/products/progrip-6-x-2-collated-fine-thread-drywall-screw-drp6200s" },
  { id: 14, stockCode: "DRP10112", name: 'PROGRIP #10 x 1-1/2" Laminated Drywall Screw', categoryId: 1, category: "Sharp Point - Fine Thread", subcategory: "Laminated", application: "Drywall to Drywall", screwType: "Laminating Screw", gauge: "#10", length: '1-1/2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated / Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "17.6", popular: true, slug: "/products/progrip-10-x-1-1-2-laminated-drywall-screw-drp10112" },
  { id: 15, stockCode: "DRPC6100", name: 'PROGRIP #6 x 1" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#6", length: '1"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "14", popular: false, slug: "/products/progrip-6-x-1-coarse-thread-drywall-screw-drpc6100" },
  { id: 16, stockCode: "DRPC6118", name: 'PROGRIP #6 x 1-1/8" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#6", length: '1-1/8"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "15.22", popular: false, slug: "/products/progrip-6-x-1-1-8-coarse-thread-drywall-screw-drpc6118" },
  { id: 17, stockCode: "DRPC6114", name: 'PROGRIP #6 x 1-1/4" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 8000, weightPerBox: "13.5", popular: true, slug: "/products/progrip-6-x-1-1-4-coarse-thread-drywall-screw-drpc6114" },
  { id: 18, stockCode: "DRPC6158", name: 'PROGRIP #6 x 1-5/8" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#6", length: '1-5/8"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "10.65", popular: false, slug: "/products/progrip-6-x-1-5-8-coarse-thread-drywall-screw-drpc6158" },
  { id: 19, stockCode: "DRPC6200", name: 'PROGRIP #6 x 2" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#6", length: '2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 3500, weightPerBox: "9.11", popular: true, slug: "/products/progrip-6-x-2-coarse-thread-drywall-screw-drpc6200" },
  { id: 20, stockCode: "DRPC7200", name: 'PROGRIP #7 x 2" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#7", length: '2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 3500, weightPerBox: "10.49", popular: false, slug: "/products/progrip-7-x-2-coarse-thread-drywall-screw-drpc7200" },
  { id: 21, stockCode: "DRPC8212", name: 'PROGRIP #8 x 2-1/2" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#8", length: '2-1/2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 2500, weightPerBox: "10.67", popular: false, slug: "/products/progrip-8-x-2-1-2-coarse-thread-drywall-screw-drpc8212" },
  { id: 22, stockCode: "DRPC8300", name: 'PROGRIP #8 x 3" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#8", length: '3"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 2000, weightPerBox: "10.11", popular: false, slug: "/products/progrip-8-x-3-coarse-thread-drywall-screw-drpc8300" },
  { id: 23, stockCode: "DPRC10312", name: 'PROGRIP #10 x 3-1/2" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#10", length: '3-1/2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "8.37", popular: false, slug: "/products/progrip-10-x-3-1-2-coarse-thread-drywall-screw-dprc10312" },
  { id: 24, stockCode: "DRPC10400", name: 'PROGRIP #10 x 4" Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Drywall Screws", application: "Drywall to Wood", screwType: "Drywall Screw", gauge: "#10", length: '4"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "9.31", popular: false, slug: "/products/progrip-10-x-4-coarse-thread-drywall-screw-drpc10400" },
  { id: 25, stockCode: "DRPC6114S", name: 'PROGRIP #6 x 1-1/4" Collated Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Collated Screws", application: "Drywall to Wood", screwType: "Collated Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: false, slug: "/products/progrip-6-x-1-1-4-collated-coarse-thread-drywall-screw-drpc6114s" },
  { id: 26, stockCode: "DRPC6200S", name: 'PROGRIP #6 x 2" Collated Coarse Thread Drywall Screw', categoryId: 2, category: "Sharp Point - Coarse Thread", subcategory: "Collated Screws", application: "Drywall to Wood", screwType: "Collated Drywall Screw", gauge: "#6", length: '2"', threadType: "Coarse", pointType: "Sharp Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: false, slug: "/products/progrip-6-x-2-collated-coarse-thread-drywall-screw-drpc6200s" },
  { id: 27, stockCode: "SDZ6114", name: 'PROGRIP #6 x 1-1/4" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 8000, weightPerBox: "14.9", popular: true, slug: "/products/progrip-6-x-1-1-4-self-drilling-drywall-screw-sdz6114" },
  { id: 28, stockCode: "SDZ6158", name: 'PROGRIP #6 x 1-5/8" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#6", length: '1-5/8"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "11.63", popular: false, slug: "/products/progrip-6-x-1-5-8-self-drilling-drywall-screw-sdz6158" },
  { id: 29, stockCode: "SDZ6178", name: 'PROGRIP #6 x 1-7/8" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#6", length: '1-7/8"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 3500, weightPerBox: "9.55", popular: true, slug: "/products/progrip-6-x-1-7-8-self-drilling-drywall-screw-sdz6178" },
  { id: 30, stockCode: "SDZ8238", name: 'PROGRIP #8 x 2-3/8" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#8", length: '2-3/8"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 3000, weightPerBox: "12.69", popular: true, slug: "/products/progrip-8-x-2-3-8-self-drilling-drywall-screw-sdz8238" },
  { id: 31, stockCode: "SDZ8258", name: 'PROGRIP #8 x 2-5/8" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#8", length: '2-5/8"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 2000, weightPerBox: "9.72", popular: false, slug: "/products/progrip-8-x-2-5-8-self-drilling-drywall-screw-sdz8258" },
  { id: 32, stockCode: "SDZ8300", name: 'PROGRIP #8 x 3" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#8", length: '3"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 2000, weightPerBox: "10.44", popular: true, slug: "/products/progrip-8-x-3-self-drilling-drywall-screw-sdz8300" },
  { id: 33, stockCode: "SDZ10312", name: 'PROGRIP #10 x 3-1/2" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#10", length: '3-1/2"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "8.51", popular: false, slug: "/products/progrip-10-x-3-1-2-self-drilling-drywall-screw-sdz10312" },
  { id: 34, stockCode: "SDZ10400", name: 'PROGRIP #10 x 4" Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Drywall Screws", application: "Drywall to Metal", screwType: "Self-Drilling Drywall Screw", gauge: "#10", length: '4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 1000, weightPerBox: "9.69", popular: false, slug: "/products/progrip-10-x-4-self-drilling-drywall-screw-sdz10400" },
  { id: 35, stockCode: "SDZ6716", name: 'PROGRIP #6 x 7/16" Self-Drilling Framing Screw', categoryId: 3, category: "Self Drilling", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Self-Drilling Framing Screw", gauge: "#6", length: '7/16"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Pan Framer Head", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 15000, weightPerBox: "18.05", popular: true, slug: "/products/progrip-6-x-7-16-self-drilling-framing-screw-sdz6716" },
  { id: 36, stockCode: "SDWZ812", name: 'PROGRIP #8 x 1/2" Self-Drilling Framing Screw', categoryId: 3, category: "Self Drilling", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Self-Drilling Framing Screw", gauge: "#8", length: '1/2"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Wafer Head - Modified Truss", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "17.95", popular: true, slug: "/products/progrip-8-x-1-2-self-drilling-framing-screw-sdwz812" },
  { id: 37, stockCode: "SDWZ1034", name: 'PROGRIP #10 x 3/4" Self-Drilling Framing Screw', categoryId: 3, category: "Self Drilling", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Self-Drilling Framing Screw", gauge: "#10", length: '3/4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Wafer Head - Modified Truss", finish: "Zinc", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "13", popular: false, slug: "/products/progrip-10-x-3-4-self-drilling-framing-screw-sdwz1034" },
  { id: 38, stockCode: "SDHZ1034", name: 'PROGRIP #10 x 3/4" Self-Drilling Framing Screw', categoryId: 3, category: "Self Drilling", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Self-Drilling Framing Screw", gauge: "#10", length: '3/4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Hex Washer Head", finish: "Zinc", driveType: '5/16" HEX', unitsPerBox: 6000, weightPerBox: "16.4", popular: true, slug: "/products/progrip-10-x-3-4-self-drilling-framing-screw-sdhz1034" },
  { id: 39, stockCode: "SDHZ10114", name: 'PROGRIP #10 x 1-1/4" Self-Drilling Framing Screw', categoryId: 3, category: "Self Drilling", subcategory: "Framing Screws", application: "Metal to Metal", screwType: "Self-Drilling Framing Screw", gauge: "#10", length: '1-1/4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Hex Washer Head", finish: "Zinc", driveType: '5/16" HEX', unitsPerBox: 4000, weightPerBox: "15.22", popular: false, slug: "/products/progrip-10-x-1-1-4-self-drilling-framing-screw-sdhz10114" },
  { id: 40, stockCode: "SDZ6114S", name: 'PROGRIP #6 x 1-1/4" Collated Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Collated Screws", application: "Drywall to Metal", screwType: "Collated Self-Drilling Drywall Screw", gauge: "#6", length: '1-1/4"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: true, slug: "/products/progrip-6-x-1-1-4-collated-self-drilling-drywall-screw-sdz6114s" },
  { id: 41, stockCode: "SDZ6178S", name: 'PROGRIP #6 x 1-7/8" Collated Self-Drilling Drywall Screw', categoryId: 3, category: "Self Drilling", subcategory: "Collated Screws", application: "Drywall to Metal", screwType: "Collated Self-Drilling Drywall Screw", gauge: "#6", length: '1-7/8"', threadType: "Fine", pointType: "Self-Drilling Point", headType: "Bugle Head", finish: "Phosphated", driveType: "#2 PHILLIPS", unitsPerBox: 10000, weightPerBox: "N/A", popular: false, slug: "/products/progrip-6-x-1-7-8-collated-self-drilling-drywall-screw-sdz6178s" },
  { id: 42, stockCode: "CPS8114", name: 'PROGRIP #8 x 1-1/4" Sharp Point Cement Board Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Cement Board to Wood", screwType: "Cement Board Screw", gauge: "#8", length: '1-1/4"', threadType: "Coarse", pointType: "Sharp Point", headType: "Flat Head with Ribs", finish: "Gray Ruspert Coating (1500 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "12.1", popular: false, slug: "/products/progrip-8-x-1-1-4-sharp-point-cement-board-screw-cps8114" },
  { id: 43, stockCode: "CPS8158", name: 'PROGRIP #8 x 1-5/8" Sharp Point Cement Board Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Cement Board to Wood", screwType: "Cement Board Screw", gauge: "#8", length: '1-5/8"', threadType: "Coarse", pointType: "Sharp Point", headType: "Flat Head with Ribs", finish: "Gray Ruspert Coating (1500 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 4000, weightPerBox: "12.04", popular: false, slug: "/products/progrip-8-x-1-5-8-sharp-point-cement-board-screw-cps8158" },
  { id: 44, stockCode: "CPSD8114", name: 'PROGRIP #8 x 1-1/4" Self-Drilling Cement Board Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Cement Board to Metal", screwType: "Cement Board Screw", gauge: "#8", length: '1-1/4"', threadType: "Coarse", pointType: "Self-Drilling Point", headType: "Flat Head with Ribs", finish: "Gray Ruspert Coating (1500 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 5000, weightPerBox: "12.85", popular: false, slug: "/products/progrip-8-x-1-1-4-self-drilling-cement-board-screw-cpsd8114" },
  { id: 45, stockCode: "CPSD8158", name: 'PROGRIP #8 x 1-5/8" Self-Drilling Cement Board Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Cement Board to Metal", screwType: "Cement Board Screw", gauge: "#8", length: '1-5/8"', threadType: "Coarse", pointType: "Self-Drilling Point", headType: "Flat Head with Ribs", finish: "Gray Ruspert Coating (1500 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 4000, weightPerBox: "12.84", popular: false, slug: "/products/progrip-8-x-1-5-8-self-drilling-cement-board-screw-cpsd8158" },
  { id: 46, stockCode: "MHDP14114", name: 'PROGRIP 1/4" x 1-1/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '1/4"', length: '1-1/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Hex Washer Head with Phil/Slot", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: '5/16" HEX', unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-1-4-x-1-1-4-concrete-screw-mhdp14114" },
  { id: 47, stockCode: "MHDP14134", name: 'PROGRIP 1/4" x 1-3/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '1/4"', length: '1-3/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Hex Washer Head with Phil/Slot", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: '5/16" HEX', unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-1-4-x-1-3-4-concrete-screw-mhdp14134" },
  { id: 48, stockCode: "MHDP316114", name: 'PROGRIP 3/16" x 1-1/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '3/16"', length: '1-1/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Hex Washer Head with Phil/Slot", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: '5/16" HEX', unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-3-16-x-1-1-4-concrete-screw-mhdp316114" },
  { id: 49, stockCode: "MHDP316134", name: 'PROGRIP 3/16" x 1-3/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '3/16"', length: '1-3/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Hex Washer Head with Phil/Slot", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: '5/16" HEX', unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-3-16-x-1-3-4-concrete-screw-mhdp316134" },
  { id: 50, stockCode: "MDP316114", name: 'PROGRIP 3/16" x 1-1/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '3/16"', length: '1-1/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Flat Head", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-3-16-x-1-1-4-concrete-screw-mdp316114" },
  { id: 51, stockCode: "MDP316134", name: 'PROGRIP 3/16" x 1-3/4" Concrete Screw', categoryId: 4, category: "Concrete and Cement Board Screws", subcategory: "Concrete and Cement Board Screws", application: "Metal to Concrete", screwType: "Concrete Screw", gauge: '3/16"', length: '1-3/4"', threadType: "High-Low", pointType: "Sharp Point", headType: "Flat Head", finish: "Blue Ruspert Coating (1000 HR Salt Spray Rated)", driveType: "#2 PHILLIPS", unitsPerBox: 100, weightPerBox: "N/A", popular: false, slug: "/products/progrip-3-16-x-1-3-4-concrete-screw-mdp316134" },
].map((product) => ({
  ...product,
  packType:
    product.subcategory.includes("Collated") ||
    product.screwType.includes("Collated")
      ? "Collated"
      : "Box",
}));

const CATEGORY_TABS = [
  { id: 0, label: "All Products" },
  { id: 1, label: "Sharp Point - Fine Thread" },
  { id: 2, label: "Sharp Point - Coarse Thread" },
  { id: 3, label: "Self Drilling" },
  { id: 4, label: "Concrete & Cement Board" },
];

const getCategoryCount = (categoryId) =>
  categoryId === 0
    ? PRODUCTS.length
    : PRODUCTS.filter((product) => product.categoryId === categoryId).length;

const FILTER_GROUPS = [
  {
    id: "length",
    label: "Screw Length",
    options: ['7/16"', '9/16"', '1/2"', '3/4"', '1"', '1-1/8"', '1-1/4"', '1-1/2"', '1-5/8"', '1-3/4"', '1-7/8"', '2"', '2-3/8"', '2-1/2"', '2-5/8"', '3"', '3-1/2"', '4"', '6"'],
  },
  {
    id: "gauge",
    label: "Gauge / Diameter",
    options: ["#6", "#7", "#8", "#10", '3/16"', '1/4"'],
  },
  {
    id: "screwType",
    label: "Screw / Product Type",
    options: ["Drywall", "Framing", "Collated", "Laminating", "Cement Board", "Concrete", "Self-Drilling"],
  },
  {
    id: "headType",
    label: "Head Type",
    options: ["Bugle", "Flat", "Hex Washer", "Pan Framer", "Wafer"],
  },
  {
    id: "application",
    label: "Application",
    options: ["Drywall-to-Metal", "Metal-to-Metal", "Concrete", "Cement Board"],
  },
  {
    id: "finish",
    label: "Finish",
    options: ["Phosphated", "Zinc", "Blue Ruspert", "Gray Ruspert"],
  },
  {
    id: "threadType",
    label: "Thread Type",
    options: ["Fine", "Coarse", "High-Low"],
  },
  {
    id: "pointType",
    label: "Point Type",
    options: ["Sharp Point", "Self-Drilling"],
  },
  {
    id: "driveType",
    label: "Drive Type",
    options: ["#2 Phillips", "5/16 Hex"],
  },
  {
    id: "packType",
    label: "Pack Type",
    options: ["Box", "Collated"],
  },
  {
    id: "popular",
    label: "Best Sellers",
    options: ["Best Sellers Only"],
  },
];

const PRODUCTS_PER_PAGE = 9;

const INITIAL_FILTERS = Object.fromEntries(
  FILTER_GROUPS.map((group) => [group.id, []]),
);

const getScrewTypeCategories = (product) => {
  const cats = new Set();
  if (product.pointType === "Self-Drilling Point") cats.add("Self-Drilling");
  if (product.screwType.includes("Collated")) cats.add("Collated");
  if (product.screwType.includes("Laminating")) cats.add("Laminating");
  if (product.screwType.includes("Concrete")) cats.add("Concrete");
  if (product.screwType.includes("Cement Board")) cats.add("Cement Board");
  if (product.screwType.includes("Framing")) cats.add("Framing");
  if (product.screwType.includes("Drywall")) cats.add("Drywall");
  return cats;
};

const getHeadTypeCategory = (product) => {
  const h = product.headType;
  if (h.includes("Pan Framer")) return "Pan Framer";
  if (h.includes("Wafer")) return "Wafer";
  if (h.includes("Hex Washer")) return "Hex Washer";
  if (h.includes("Flat")) return "Flat";
  return "Bugle";
};

const getApplicationCategory = (product) => {
  const app = product.application;
  if (app === "Metal to Metal") return "Metal-to-Metal";
  if (app.includes("Cement Board")) return "Cement Board";
  if (app.includes("Concrete")) return "Concrete";
  return "Drywall-to-Metal";
};

const getFinishCategories = (product) => {
  const f = product.finish;
  if (f.includes("Gray Ruspert")) return ["Gray Ruspert"];
  if (f.includes("Blue Ruspert")) return ["Blue Ruspert"];
  if (f.includes("Zinc") && f.includes("Phosphated")) return ["Phosphated", "Zinc"];
  if (f === "Zinc") return ["Zinc"];
  return ["Phosphated"];
};

const getPointTypeCategory = (product) =>
  product.pointType === "Self-Drilling Point" ? "Self-Drilling" : "Sharp Point";

const getDriveTypeCategory = (product) =>
  product.driveType.includes("HEX") ? "5/16 Hex" : "#2 Phillips";


const REVEAL = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
};

const revealTransition = (delay = 0) => ({
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1],
  delay,
});

function ProductCard({ product, isActive, onClick, onMouseEnter }) {
  return (
    <button
      type="button"
      className={`product-section__card${
        isActive ? " product-section__card--active" : ""
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <span className="product-section__card-media">
        {product.popular && (
          <span className="product-section__card-badge">Popular</span>
        )}
      </span>
      <span className="product-section__card-content">
        <span className="product-section__card-code">{product.stockCode}</span>
        <span className="product-section__card-caption">{product.name}</span>
        <span className="product-section__card-meta">
          {product.length} · {product.subcategory}
        </span>
      </span>
    </button>
  );
}

export default function ProductSection() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState(() => ({ ...INITIAL_FILTERS }));
  const [openGroup, setOpenGroup] = useState("length");

  const toggleGroupOpen = (groupId) => {
    setOpenGroup((prev) => (prev === groupId ? null : groupId));
  };

  const toggleFilter = (groupId, value) => {
    setSelectedFilters((current) => {
      const isSelected = current[groupId].includes(value);
      return {
        ...current,
        [groupId]: isSelected
          ? current[groupId].filter((option) => option !== value)
          : [...current[groupId], value],
      };
    });
    setActiveProduct(null);
    setCurrentPage(1);
  };

  const clearAll = () => {
    setSelectedFilters({ ...INITIAL_FILTERS });
    setActiveProduct(null);
    setCurrentPage(1);
  };

  const sel = selectedFilters;

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory !== 0 && product.categoryId !== activeCategory) return false;
    if (sel.length.length > 0 && !sel.length.includes(product.length)) return false;
    if (sel.gauge.length > 0 && !sel.gauge.includes(product.gauge)) return false;
    if (sel.screwType.length > 0) {
      const cats = getScrewTypeCategories(product);
      if (!sel.screwType.some((t) => cats.has(t))) return false;
    }
    if (sel.headType.length > 0 && !sel.headType.includes(getHeadTypeCategory(product))) return false;
    if (sel.application.length > 0 && !sel.application.includes(getApplicationCategory(product))) return false;
    if (sel.finish.length > 0) {
      const finishes = getFinishCategories(product);
      if (!sel.finish.some((f) => finishes.includes(f))) return false;
    }
    if (sel.threadType.length > 0 && !sel.threadType.includes(product.threadType)) return false;
    if (sel.pointType.length > 0 && !sel.pointType.includes(getPointTypeCategory(product))) return false;
    if (sel.driveType.length > 0 && !sel.driveType.includes(getDriveTypeCategory(product))) return false;
    if (sel.packType.length > 0 && !sel.packType.includes(product.packType)) return false;
    if (sel.popular.includes("Best Sellers Only") && !product.popular) return false;
    return true;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );
  const pageStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    pageStart,
    pageStart + PRODUCTS_PER_PAGE,
  );

  const changePage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    setActiveProduct(null);
  };

  const selectedProduct =
    PRODUCTS.find((product) => product.stockCode === activeProduct) ||
    paginatedProducts[0] ||
    null;

  return (
    <section className="product-section" id="products">
      <div className="product-section__wrap">
        <div className="product-section__inner">
          <div className="product-section__hero-row">
            <motion.header
              className="product-section__header"
              {...REVEAL}
              transition={revealTransition(0)}
            >
              <span className="product-section__badge">
                <i className="product-section__badge-dash" aria-hidden="true" />
                Complete
              </span>

              <h2 className="product-section__heading">
                Products Built{" "}
                <span className="product-section__heading-index">01</span>
                <br />
                For Speed.
              </h2>

              <p className="product-section__subtitle">
                The full range of PROGRIP fasteners for every job
              </p>

              <ContactModal
                variant="red"
                size="sm"
                className="product-section__contact-btn"
              >
                CONTACT US
              </ContactModal>
            </motion.header>

            {/* Stage = one coordinate space that holds the stripes AND the
                floating box so the image can overlap the stripes. */}
            <div className="product-section__hero-stage">
              <div className="product-section__hero-media" aria-hidden="true">
                <div className="product-visual">
                  <div className="product-strips">
                    <span className="product-strip product-strip--red-left" />
                    <span className="product-strip product-strip--gray" />
                    <span className="product-strip product-strip--red-right" />
                  </div>
                </div>
              </div>

              <motion.img
                className="product-section__progrip-box"
                src={proGripBox}
                alt="PROGRIP Box"
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="product-section__filter-bar">
            <span className="product-section__cat-pill">Categories</span>
            <div className="product-section__filters">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`product-section__filter-tab${
                    activeCategory === tab.id
                      ? " product-section__filter-tab--active"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setActiveProduct(null);
                    setCurrentPage(1);
                  }}
                >
                  {tab.label}
                  <span className="product-section__filter-count">
                    ({getCategoryCount(tab.id)})
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="product-section__content">
            <motion.aside
              className="product-section__sidebar"
              {...REVEAL}
              transition={revealTransition(0)}
            >
              {FILTER_GROUPS.map((group) => {
                const isOpen = openGroup === group.id;
                const activeCount = selectedFilters[group.id].length;
                return (
                  <div key={group.id} className="ps-filter-group">
                    <button
                      type="button"
                      className="ps-filter-group__header"
                      onClick={() => toggleGroupOpen(group.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="ps-filter-group__label">
                        {group.label}
                        {activeCount > 0 && (
                          <span className="ps-filter-group__active-count">{activeCount}</span>
                        )}
                      </span>
                      <span className="ps-filter-group__chevron" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <ul className="ps-filter-group__list">
                        {group.options.map((option) => {
                          const isChecked = selectedFilters[group.id].includes(option);
                          return (
                            <li key={option} className="ps-filter-group__item">
                              <label className="ps-checkbox">
                                <input
                                  type="checkbox"
                                  className="ps-checkbox__input"
                                  checked={isChecked}
                                  onChange={() => toggleFilter(group.id, option)}
                                />
                                <span className="ps-checkbox__box" aria-hidden="true">
                                  {isChecked && (
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                      <path
                                        d="M1 4L3.5 6.5L9 1"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </span>
                                <span className="ps-checkbox__text">{option}</span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}

              <button
                type="button"
                className="ps-filter-clear"
                onClick={clearAll}
              >
                Clear All Filters
              </button>
            </motion.aside>

            <motion.div
              className="product-section__panel"
              {...REVEAL}
              transition={revealTransition(0.15)}
            >
              <div className="product-section__panel-label">
                <i className="product-section__dot" aria-hidden="true" />
                Interactive View
              </div>

              <span className="product-section__panel-index">
                {filteredProducts.length} Products
              </span>

              {filteredProducts.length > 0 && (
                <span className="product-section__page-status">
                  Page {currentPage} of {totalPages}
                </span>
              )}

              {filteredProducts.length > 0 && (
                <div className="product-section__grid-shell">
                  <button
                    type="button"
                    className="product-section__pagination-button product-section__pagination-button--previous"
                    aria-label="Show previous 9 products"
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                  >
                    ‹
                  </button>

                  <div className="product-section__grid">
                    {paginatedProducts.map((product) => (
                      <ProductCard
                        key={product.stockCode}
                        product={product}
                        isActive={activeProduct === product.stockCode}
                      onMouseEnter={() => setActiveProduct(product.stockCode)}
                      onClick={() => {
                        setActiveProduct(product.stockCode);
                        navigate(
                          `/product/${product.categoryId}/${product.id}`,
                        );
                      }}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    className="product-section__pagination-button product-section__pagination-button--next"
                    aria-label="Show next 9 products"
                    disabled={currentPage === totalPages}
                    onClick={() => changePage(currentPage + 1)}
                  >
                    ›
                  </button>
                </div>
              )}

              {filteredProducts.length === 0 && (
                <div className="product-section__empty">
                  No products match the selected filters.
                </div>
              )}

              {selectedProduct && (
                <div className="product-section__panel-footer">
                  <div className="product-section__details">
                    <span className="product-section__details-eyebrow">
                      {selectedProduct.stockCode}
                    </span>
                    <h3 className="product-section__details-title">
                      {selectedProduct.name}
                    </h3>
                    <span className="product-section__details-size">
                      {selectedProduct.gauge} × {selectedProduct.length}
                    </span>
                  </div>

                  <div className="product-section__actions">
                    <a href="#contact" className="product-section__btn">
                      Buy Now
                    </a>
                    <a
                      href="#contact"
                      className="product-section__btn product-section__btn--ghost"
                    >
                      Build Submittals
                    </a>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.aside
              className="product-section__highlights"
              style={{ display: "none" }}
              {...REVEAL}
              transition={revealTransition(0.3)}
            >
              <span className="product-section__highlights-title">
                Product Details
              </span>

              {selectedProduct ? (
                <dl className="product-section__spec-list">
                  <div>
                    <dt>Stock code</dt>
                    <dd>{selectedProduct.stockCode}</dd>
                  </div>
                  <div>
                    <dt>Gauge</dt>
                    <dd>{selectedProduct.gauge}</dd>
                  </div>
                  <div>
                    <dt>Length</dt>
                    <dd>{selectedProduct.length}</dd>
                  </div>
                  <div>
                    <dt>Application</dt>
                    <dd>{selectedProduct.application}</dd>
                  </div>
                  <div>
                    <dt>Thread type</dt>
                    <dd>{selectedProduct.threadType}</dd>
                  </div>
                  <div>
                    <dt>Units per box</dt>
                    <dd>{selectedProduct.unitsPerBox.toLocaleString()}</dd>
                  </div>
                  <div>
                    <dt>Weight per box</dt>
                    <dd>
                      {selectedProduct.weightPerBox === "N/A"
                        ? "N/A"
                        : `${selectedProduct.weightPerBox} lbs`}
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="product-section__details-placeholder">
                  Select a product to view its specifications.
                </p>
              )}
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}