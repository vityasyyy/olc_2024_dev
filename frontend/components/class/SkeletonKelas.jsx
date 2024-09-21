import CardLoading from "./CardLoading";

export default function SkeletonKelas () {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
        </div>
    )
}