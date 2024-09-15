export const schema = {
    fields: [
      {
        name: "summary",
        meta: {
          displayName: "Add Offer",
          type: "section"
        },
        fields: [
          {
            name: "Title",
            meta: {
              displayName: "Name of the Offer",
              displayType: "text_field",
              displayProps: {
                md: 6
              }
            }
          },
          {
            name: "description",
            meta: {
              displayName: "Description of the Offer",  
              displayType: "text_field",
              displayProps: {
                md: 6
              }
            }
          },
          {
            name: "address_header",
            prop: null,
            meta: {
        
              displayType: "header",
              displayProps: {
                md: 12
              }
            }
          },
          {
            name: "street_address_1",
            meta: {
              displayName: "Street Address",
              displayType: "text_field"
            }
          },
          // {
          //   name: "street_address_2",
          //   meta: {
          //     displayName: "Street Address 2",
          //     displayType: "text_field"
          //   }
          // },
          {
            name: "Type",
            meta: {
              displayName: "State",
              displayType: "select",
              options: [
                {
                  label: "Job Offer",
                  value: "Job offer"
                },
                {
                  label: "Internship",
                  value: "Internship"
                }
              ],
              displayProps: {
                md: 12
              }
            }
          },
          {
            name: "Department",
            meta: {
              displayName: "Department",
              displayType: "select",
              options: [
                {
                  label: "Commercial",
                  value: "Commercial"
                },
                {
                  label: "Hr",
                  value: "Hr"
                }
              ],
              displayProps: {
                md: 12
              }
            }
          },
          // {
          //   name: "pinocde",
          //   meta: {
          //     displayName: "Pincode",
          //     displayType: "text_field",
          //     displayProps: {
          //       md: 12
          //     },
          //     validation: {
          //       required: true,
          //       pattern: "^[1-9][0-9]",
          //       patternDetail: {
          //         errorMsg: "Pincode is not valid"
          //       }
          //     }
          //   }
          // },
          // {
          //   name: "country",
          //   meta: {
          //     displayName: "Country",
          //     displayType: "text_field",
          //     value: "INDIA",
          //     isReadonly: true,
          //     displayProps: {
          //       md: 6
          //     },
          //     validation: {
          //       required: true
          //     }
          //   }
          // }
        ]
      },
      // {
      //   name: "contact_details",
      //   meta: {
      //     displayName: "Contact details",
      //     type: "section"
      //   },
      //   fields: [
      //     {
      //       name: "same_address",
      //       meta: {
      //         displayName: "Use same address as registered address",
      //         displayType: "checkbox"
      //       }
      //     },
      //     {
      //       name: "correspondence_address",
      //       meta: {
      //         displayName: "Address line 1",
      //         displayType: "text_field"
      //       }
      //     },
      //     {
      //       name: "correspondence_address2",
      //       meta: {
      //         displayName: "Address line 2",
      //         displayType: "text_field",
      //         displayProps: {
      //           md: 6
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  };