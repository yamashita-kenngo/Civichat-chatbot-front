export default async function handler(req: { params: { id: any; }; }, res: any) {
  const urlId = req.params.id;
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