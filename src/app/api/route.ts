export async function GET(request: Request) {
    const data = {id:1, name: "Mada"}
    return Response.json({data})
}