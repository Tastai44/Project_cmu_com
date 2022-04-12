import StoryCard from './StoryCard'
const stories = [
    {
        name: "Hiroshi",
        src: "/images/Hiroshi.jpeg"
        // profile:
    },
    {
        name: "L",
        src: "/images/249647.jpeg"
        // profile:

    },
    {
        name: "hikigaya hachiman",
        src: "/images/292165.jpeg"
        // profile:

    },
    {
        name: "Oreki Hōtarō",
        src: "/images/438792.jpeg"
        // profile:

    },
    {
        name: "Prof. Ken",
        src: "/images/Teacher.jpeg"
        // profile:

    },
]
function Stories() {
    return (
        <div className="flex justify-center space-x-3
        mx-auto">
           {stories.map((story) => (
              < StoryCard 
              key={story.src} 
              name={story.name}  
              src={story.src} />
           ))}
        </div>
    )
}

export default Stories