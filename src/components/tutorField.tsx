export interface TutorProps {
    title: string;
    topic: string;
    text: string;
}

// Using function declaration, NOT arrow functions
export default function TutorField({ title, topic, text }: TutorProps) {
    return (
        <>
            <h1>{title}</h1>
            <h3>{topic}</h3>
            <p>{text}</p>
        </>
    );
}