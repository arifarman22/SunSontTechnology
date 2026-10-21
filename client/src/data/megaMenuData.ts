// Navigation data structure for mega menu
export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: ProductItem[];
}

export const productCategories: Category[] = [
  {
    id: "banking",
    name: "Banking",
    icon: "Building2",
    products: [
      {
        id: "cdm-d10",
        name: "Smart Cash Deposit Machine (SFT20 D10)",
        description: "Advanced self-service cash deposit solution to enhance banking efficiency and security",
        image: "https://lh3.googleusercontent.com/hUBr9erm9S-3BZoo0nDIJViGnAYuFEHGJuXwx6hfNUXDnxClKHBa-y8UZwVnNI3SNSA76Ih9BTdBTYy90g=w2116",
        link: "/products/banking/4ba97690-fd17-4865-abd1-45f85174430d",
        badge: "Popular"
      },
      {
        id: "atm-a10",
        name: "Automated Teller Machine (SFT20 A10)",
        description: "High-performance ATM designed to deliver secure, efficient, and convenient cash dispensing",
        image: "https://lh3.googleusercontent.com/K11Ct90TtCW-0aXCDESXlPodAhgOgD1PaySgvJWA7nGljp0gxq0Cq8VyQFhAPlJz9XIiO7E_PoeKSr23gQ=w2116",
        link: "/products/banking/c4682ea9-a566-45f6-b2ee-14feea68e626"
      },
      {
        id: "crm-r10",
        name: "Cash Recycling Machine (SFT20 R10)",
        description: "Advanced cash recycling machine optimizing cash inventory and transaction speed",
        image: "https://lh3.googleusercontent.com/eaKsK9J_yvLmhIv5l-UZKbUjT9OzsO41BCrneT0nXBj7z57QUFeFg8qlw2J5vvocKv90S3NkhEy8gY_1gg=w2116",
        link: "/products/banking/815092e4-0736-4043-97a6-b206650ec8a7"
      },
      {
        id: "cdm-d12",
        name: "Cash & Cheque Deposit (SFT20 D12)",
        description: "Versatile self-service deposit machine supporting concurrent cash and cheque intake",
        image: "https://lh3.googleusercontent.com/Th7og1d1MYanHvTJMtxyVKX_kPx9CfpgbJ1hwXDdS3HjuekPGs78zMmWDp9Xc_hhOpdlTpFQrhDUq6jC3A=w2116",
        link: "/products/banking/bd10f3d2-9ffc-4640-a20b-849e67050430"
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    products: [
      {
        id: "screening-d1007",
        name: "Health Screening Kiosk SKT-D1007",
        description: "Automated multi-parameter health screening with instant results and hospital EHR integration",
        image: "https://lh3.googleusercontent.com/aZRb15WzsirmRRi5VGAC6b01DvvBafdppwaj8-lfPeavOg6yFvj4rZms9hdQj49bDD_78pxjKPmBbXBjCw=w2116",
        link: "/products/healthcare/60eacd03-c045-47d5-80c6-6a68ee46c1c3",
        badge: "New"
      },
      {
        id: "checkin-d1078",
        name: "Hospital Check-in Kiosk SKT-D1078",
        description: "Streamline patient registration, appointment check-in, and department routing",
        image: "https://lh3.googleusercontent.com/cmuA5-HkC5mR0xok0HUAj35tKGQOe2pyxOxnPocGSFAMzLQOLWrPyL8ohpQPgIMcjOhF0UWrvyqLfID0fQ=w2116",
        link: "/products/healthcare/85a14aa4-b1ad-4939-9425-f13020a4c67d"
      },
      {
        id: "bp-monitor-smt2203",
        name: "Automatic Blood Pressure Monitor SMT2203",
        description: "Clinical-grade automated blood pressure evaluation with thermal printout and voice guidance",
        image: "https://lh3.googleusercontent.com/vhyO0sn77OcyOioUOFv-oqX-gtofAvrb6ylJLCyqBPdkjE6n7CFqwyrqF2bJHPXijUEiL1htjKemwEYGAw=w2116",
        link: "/products/healthcare/631976f3-825f-42d5-8e96-6bb13c66fa79"
      },
      {
        id: "body-analyzer-smt2106",
        name: "Body Composition Analyzer SMT2106",
        description: "Multi-frequency bioelectrical impedance analyzer for comprehensive health assessments",
        image: "https://lh3.googleusercontent.com/kTmkyN-hqAjziMcEsuCWZG2iUHhpq38rEpBWrwGX4PlBM1lVDLpt9dgt7kooWyYXAz3tM6ucbF-fP-ki5Q=w2116",
        link: "/products/healthcare/ab08dfdf-5c15-4f4e-bc3c-90aad06e005e"
      }
    ]
  },
  {
    id: "epp",
    name: "EPP Security",
    icon: "Shield",
    products: [
      {
        id: "metal-keyboard-spc288bg",
        name: "Full Metal Keyboard SPC288BG",
        description: "Vandal-resistant stainless steel keyboard with trackball for unattended high-security kiosks",
        image: "https://lh3.googleusercontent.com/9LeRs8UsyYL7bPSaSBG6WOt0UZuZBX35MhaaZJ6iFBnSnY-panXUYARuCIRN0rbuo6I4YqN4aHuzGLj4bw=w2116",
        link: "/products/epp/69cc7887-5d90-40e6-a867-557fb7b54924",
        badge: "Certified"
      },
      {
        id: "pinpad-se8098b",
        name: "SE8098B Encrypted PIN Pad",
        description: "PCI 5.x certified dust and water-resistant encryption pin pad with tamper-detection hardware",
        image: "https://lh3.googleusercontent.com/vhyO0sn77OcyOioUOFv-oqX-gtofAvrb6ylJLCyqBPdkjE6n7CFqwyrqF2bJHPXijUEiL1htjKemwEYGAw=w2116",
        link: "/products/epp/9a858e7f-41ae-43fc-8806-b5e648c88a93"
      },
      {
        id: "pinpad-se8098c",
        name: "SE8098C PCI Approved EPP",
        description: "High-security EPP with AES encryption and rugged keypad construction for ATM terminals",
        image: "https://lh3.googleusercontent.com/cmuA5-HkC5mR0xok0HUAj35tKGQOe2pyxOxnPocGSFAMzLQOLWrPyL8ohpQPgIMcjOhF0UWrvyqLfID0fQ=w2116",
        link: "/products/epp/5f4bbcd8-f7b9-4554-9d91-fcab28e6b05e"
      }
    ]
  },
  {
    id: "retail",
    name: "Retail",
    icon: "ShoppingCart",
    products: [
      {
        id: "self-checkout",
        name: "Full Function Check-out Kiosk",
        description: "Modular self-checkout kiosk with EMV card reading, cash options, and barcode scanning",
        image: "https://www.rlexportimport.com/images/industries-and-products/Self%20Check-out%20Kiosk/full-function-check-out-kiosk.png",
        link: "/products/retail/d3c766de-a665-4c62-bddf-cebc30c28300",
        badge: "Best Seller"
      },
      {
        id: "signage-skt-d1023",
        name: "SKT-D1023 Digital Signage Kiosk",
        description: "Interactive high-brightness touchscreen display for advertising, wayfinding, and visitor info",
        image: "https://lh3.googleusercontent.com/hfPFFVUXDmqLGDIgBUGHS1XWwhP64pimDZJaSv-AWzPEWMTNzDja9L_FEPI9ChOTl2Ckh_enZJJPdVIBmg=w2116",
        link: "/products/retail/06c06d1c-6f80-46b9-83e9-f8fcc386ff8d"
      },
      {
        id: "terminal-skt-d1051",
        name: "SKT-D1051 Digital Currency Terminal",
        description: "Automated cash collection and counterfeit detection terminal designed for retail counters",
        image: "https://lh3.googleusercontent.com/v62gGYgiU2RinMtSJ3KO_AHFqQofzThY1aQTS_-uIx2upVJHTdYXkqx_BiI0dCxRHWYhAjzO5fpk6_S1-w=w2116",
        link: "/products/retail/bdedff7b-f97f-4814-834e-b1ff83b232f9"
      }
    ]
  },
  {
    id: "payments",
    name: "Payments",
    icon: "CreditCard",
    products: [
      {
        id: "bitcoin-skt-r70",
        name: "SKT-R70 P11 Bitcoin Payment Kiosk",
        description: "Next-gen cryptocurrency and cash self-service terminal with high compliance standards",
        image: "https://lh3.googleusercontent.com/ZWPKCzCNk3Maif6BBh_EdxHi8D058YKJqgCEJ9nFyatV2gJBx90ddilW2iRHNDOECQ-iDM83s7bt4Ld7Qg=w2116",
        link: "/products/payments/c2e1246a-b41f-4257-b6bc-f6b6b005c0bd",
        badge: "Trending"
      },
      {
        id: "wall-mount-skt-f76",
        name: "SKT-F76 P10 Wall Mounted Payment Terminal",
        description: "Ultra-thin space-saving payment terminal for hospital, retail, and service ticketing",
        image: "https://lh3.googleusercontent.com/VLSWw8CjOu175ph7PW250ZeWCDKLAy5f3YDrqeHO4-ayocNwb9cl0XYmo8j1heeHj2pCKe0DPKaCmoIwSg=w2116",
        link: "/products/payments/c3d9bf4e-50b5-48d0-ac6b-91ed65cc4020"
      },
      {
        id: "utility-skt-d1073",
        name: "SKT-D1073 Integrated Utility Terminal",
        description: "Multi-utility payment terminal handling mixed banknotes, coins, and digital accounts",
        image: "https://lh3.googleusercontent.com/M7k0DPwu_dsRc7QG0k3jcoKMPEIYWi4_cYnUJRQWk6b09d_Pt8zF6NU-tsI-52jKwGxCIhev3DosGgaGXw=w2116",
        link: "/products/payments/332ca4ef-4bcf-4097-8d0c-41967f978101"
      }
    ]
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: "Train",
    products: [
      {
        id: "vender-skt-d1064",
        name: "SKT-D1064 Ticket Vending Machine",
        description: "Intelligent ticket dispensing machine with cash and cashless transaction processing",
        image: "https://image2url.com/r2/default/images/1770795509177-7146ff71-e95f-41ad-b63a-60f04fc0946a.blob",
        link: "/products/transportation/78307b26-9f7a-4279-b396-77f1a7067c0d",
        badge: "Transit"
      },
      {
        id: "vender-skt-d1067",
        name: "SKT-D1067 Ticket Vending Machine",
        description: "High-capacity ticket vending and card top-up machine for rail, metro, and transit hubs",
        image: "https://lh3.googleusercontent.com/8W9BRLk--uP_cPlcMretyfL6_zWCmqTyxS0-uw2jWvWudDIiIQs9VoI8AxFLaDrZENJ8v0BLYqFLmOmR1w=w2116",
        link: "/products/transportation/91bc11a8-5e95-4b09-8fd7-972954848ad4"
      }
    ]
  }
];
