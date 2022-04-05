export default async function handler(req: any, res: any) {
  const { urlId } = req.query;
  await fetch(
    `${process.env.APIURL}/info/${urlId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}