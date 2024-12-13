// ./src/data/MenuData.js

const menuItems = [
  { name: "Home", path: "/", subMenu: [] },
  { name: "About us", path: "/about-us", subMenu: [] },
  {
    name: "Business Setup",
    path: "/business-setup",
    subMenu: [
      {
        name: "Company Registration",
        path: "/business-setup/company-registration",
        subMenu: [
          {
            name: "Private Limited Company",
            path: "/business-setup/company-registration/private-limited-company",
          },
          {
            name: "Public Limited Company",
            path: "/business-setup/company-registration/public-limited-company",
          },
          {
            name: "One Person Company",
            path: "/business-setup/company-registration/one-person-company",
          },
          {
            name: "LLP Registration",
            path: "/business-setup/company-registration/llp-registration",
          },
          {
            name: "Partnership Firm",
            path: "/business-setup/company-registration/partnership-firm",
          },
          {
            name: "NGO (Section 8)",
            path: "/business-setup/company-registration/ngo-section-8",
          },
        ],
      },
      {
        name: "Compliance",
        path: "/business-setup/compliance",
        subMenu: [
          {
            name: "Annual Compliance",
            path: "/business-setup/compliance/annual-compliance",
          },
          {
            name: "Add/Remove Director",
            path: "/business-setup/compliance/add-remove-director",
          },
          {
            name: "GST Filing",
            path: "/business-setup/compliance/gst-filing",
          },
          {
            name: "Add/Remove Designation Partner",
            path: "/business-setup/compliance/add-remove-designation-partner",
          },
          {
            name: "LLP Agreement",
            path: "/business-setup/compliance/llp-agreement",
          },
          {
            name: "Conversion to OPC to LLP/Pvt Ltd",
            path: "/business-setup/compliance/conversion-to-opc-to-llp-pvt-ltd",
          },
          {
            name: "ITR Filing Individual",
            path: "/business-setup/compliance/itr-filing-individual",
          },
          {
            name: "Closure of Company",
            path: "/business-setup/compliance/closure-of-company",
          },
          {
            name: "Bookkeeping and Accounting",
            path: "/business-setup/compliance/bookkeeping-and-accounting",
          },
          {
            name: "Office Address Change",
            path: "/business-setup/compliance/office-address-change",
          },
          {
            name: "Increased Authorised Capital",
            path: "/business-setup/compliance/increased-authorised-capital",
          },
        ],
      },
      {
        name: "GST Registration",
        path: "/business-setup/gst-registration",
        subMenu: [],
      },
      {
        name: "Digital Signature",
        path: "/business-setup/digital-signature",
        subMenu: [],
      },
      {
        name: "FSSAI Registration",
        path: "/business-setup/fssai-registration",
        subMenu: [],
      },
      {
        name: "Trade License",
        path: "/business-setup/trade-license",
        subMenu: [],
      },
      {
        name: "ISO Certification",
        path: "/business-setup/iso-certification",
        subMenu: [],
      },
      {
        name: "Import Export Code",
        path: "/business-setup/import-export-code",
        subMenu: [],
      },
      {
        name: "Startup",
        path: "/business-setup/startup",
        subMenu: [],
      },
      {
        name: "MSME",
        path: "/business-setup/msme",
        subMenu: [],
      },
    ],
  },
  {
    name: "Intellectual Property",
    path: "/intellectual-property",
    subMenu: [
      {
        name: "Trademark",
        path: "/intellectual-property/trademark",
        subMenu: [
          {
            name: "Trademark Filing",
            path: "/intellectual-property/trademark/trademark-filing",
          },
          {
            name: "Trademark Renewal",
            path: "/intellectual-property/trademark/trademark-renewal",
          },
          {
            name: "Opposition/Rectification",
            path: "/intellectual-property/trademark/opposition-rectification",
            subMenu: [
              {
                name: "Filing Opposition",
                path: "/intellectual-property/trademark/opposition-rectification/filing-opposition",
              },
              {
                name: "Counter Statement",
                path: "/intellectual-property/trademark/opposition-rectification/counter-statement",
              },
              {
                name: "Evidence Ur 45/46",
                path: "/intellectual-property/trademark/opposition-rectification/evidence-ur-45-46",
              },
              {
                name: "Opposition Hearing",
                path: "/intellectual-property/trademark/opposition-rectification/opposition-hearing",
              },
            ],
          },
          {
            name: "TM-M/TM-P (Change in Trademark Application)",
            path: "/intellectual-property/trademark/tm-m-tm-p",
          },
          {
            name: "Trademark License",
            path: "/intellectual-property/trademark/trademark-license",
          },
          {
            name: "Sell Trademark",
            path: "/intellectual-property/trademark/sell-trademark",
          },
          {
            name: "Search and Due Diligence",
            path: "/intellectual-property/trademark/search-and-due-diligence",
          },
          {
            name: "Filing Application",
            path: "/intellectual-property/trademark/filing-application",
          },
          {
            name: "Examination",
            path: "/intellectual-property/trademark/examination",
          },
          {
            name: "Show Cause Hearing",
            path: "/intellectual-property/trademark/show-cause-hearing",
          },
        ],
      },
      {
        name: "Patent Registration",
        path: "/intellectual-property/patent-registration",
        subMenu: [
          {
            name: "Patent Search",
            path: "/intellectual-property/patent-registration/patent-search",
          },
          {
            name: "Filing Patent Application",
            path: "/intellectual-property/patent-registration/filing-patent-application",
          },
          {
            name: "Request for Examination",
            path: "/intellectual-property/patent-registration/request-for-examination",
          },
          {
            name: "FER",
            path: "/intellectual-property/patent-registration/fer",
          },
          {
            name: "Renewal",
            path: "/intellectual-property/patent-registration/renewal",
          },
        ],
      },
      {
        name: "Copyright Registration",
        path: "/intellectual-property/copyright-registration",
        subMenu: [
          {
            name: "Filing Copyright Application",
            path: "/intellectual-property/copyright-registration/filing-copyright-application",
          },
          {
            name: "Examination",
            path: "/intellectual-property/copyright-registration/examination",
          },
          {
            name: "Hearing",
            path: "/intellectual-property/copyright-registration/hearing",
          },
        ],
      },
      {
        name: "Design Registration",
        path: "/intellectual-property/design-registration",
        subMenu: [
          {
            name: "Search and Due Diligence",
            path: "/intellectual-property/design-registration/search-and-due-diligence",
          },
          {
            name: "Filing",
            path: "/intellectual-property/design-registration/filing",
          },
          {
            name: "Examination",
            path: "/intellectual-property/design-registration/examination",
          },
          {
            name: "Hearing",
            path: "/intellectual-property/design-registration/hearing",
          },
        ],
      },
      {
        name: "Geographical/Trade Secret",
        path: "/intellectual-property/geographical-trade-secret",
        subMenu: [],
      },
    ],
  },
  {
    name: "Other Legal Services",
    path: "/other-legal-services",
    subMenu: [],
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    subMenu: [],
  },
];

export default menuItems;
