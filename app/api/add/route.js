
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  const body = await request.json();

  const { handle, links, pic, desc } = body;

  // === Basic Validation ===

  // 1. Check for missing fields
  if (!handle || !links || !pic || !desc) {
    return Response.json({
      success: false,
      error: true,
      message: "All fields are required.",
      result: null
    });
  }

  // 2. Length Limits
  if (handle.length > 20) {
    return Response.json({
      success: false,
      error: true,
      message: "Handle should not exceed 20 characters.",
      result: null
    });
  }

  if (desc.length > 200) {
    return Response.json({
      success: false,
      error: true,
      message: "Description should be under 200 characters.",
      result: null
    });
  }

  // 3. Validate each link
  const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

  for (let i = 0; i < links.length; i++) {
    const { link, linktext } = links[i];

    if (!link || !linktext) {
      return Response.json({
        success: false,
        error: true,
        message: `Both link and linktext are required (Item ${i + 1}).`,
        result: null
      });
    }

    if (linktext.length > 50) {
      return Response.json({
        success: false,
        error: true,
        message: `Link text is too long (max 50 chars) in item ${i + 1}.`,
        result: null
      });
    }

    if (!urlPattern.test(link)) {
      return Response.json({
        success: false,
        error: true,
        message: `Invalid URL format in item ${i + 1}.`,
        result: null
      });
    }
  }

  // 4. Validate profile picture URL
  if (!urlPattern.test(pic)) {
    return Response.json({
      success: false,
      error: true,
      message: "Profile picture link is not a valid URL.",
      result: null
    });
  }

  // === Check for Duplicate Handle ===
  const client = await clientPromise;
  const db = client.db("BitTree");
  const collection = db.collection("links");

  const existing = await collection.findOne({ handle: handle });
  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "This BitTree already exists.",
      result: null
    });
  }

  // === Save to DB ===
  const result = await collection.insertOne(body);

  return Response.json({
    success: true,
    error: false,
    message: "Your BitTree has been generated. Enjoy!",
    result: result
  });
}




// import clientPromise from '@/lib/mongodb'

// export async function POST(request) {
//     const body = await request.json()
    
//     const client=await clientPromise
//     const db=client.db("BitTree")
//     const collection=db.collection("links")

//     //if handle is already claimed, you can cannot create the bittree
//     const doc=await collection.findOne({handle:body.handle})
//     if(doc){
//         return Response.json({success: false,error:true,message:"This BitTree already exists",result:null})
//     }

//     const result=await collection.insertOne(body)

//     console.log(body);
//     return Response.json({success: true,error:false,message:"Your BitTree has been generated. Enjoy!",result:result})
// }