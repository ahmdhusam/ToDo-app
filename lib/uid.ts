export default function uid(): string {
    const head = new Date().getDate().toString(36);
    const tail = Math.random().toString(36);

    return (head + tail).slice(3);
}
