"use strict";

require('dotenv').config();
const axios = require('axios');
const SaveDesigns = require('./schema');


async function getDesigns (req,res){
    
    
    const designCategory= ["galaxy", "cool", "fashion", "paint"];
    
    designCategory.forEach(async(cato) => {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: cato,
                        page: 1,
                        per_page: 5,
                        client_id: `${process.env.UNSPLASH_KEY}`,
                        response_type: 'json',
                        redirect_uri: `urn:ietf:wg:oauth:2.0:oob`
                    }
                });
                const data = response.data.results;
                data.forEach(async(design) => {
                    const newDesign = new SaveDesigns({
                        category: cato,
                        title: design.description,
                        url: design.urls.regular
                    });
                    newDesign.save();
                })
            })
            res.status(201).json(designCategory);
        }
        
        module.exports = getDesigns;





//             .then(response => {

                
//                 let designsArr = response.data.results.map(design => new SaveDesigns({
//                         category: designCategory[i],
//                         title: design.tags[0]?.title,
//                         url: design.urls.small
//                     }))

//                 designsArr.forEach(design=> design.save());
                
//                 SaveDesigns.find({}, (error, data) => {
//                     if (error) console.log(`error reading from the db: ${error}`);
//                     else res.send(data);
//                 })
//             }).catch(err => {
//                 console.log(err);
//             }
//             );

//         }
//     // }
//     //     )

//     }

// module.exports = getDesigns;