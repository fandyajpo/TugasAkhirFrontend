import type { NextApiRequest, NextApiResponse } from "next";
import FetchJson from "lib/FetchJson";
export default async function GetMethod(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let resx = await FetchJson({
      Url: "/",
      Method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json(resx);
  } catch (e: any) {
    return res.status(400).json({
      message: e,
    });
  }
}
