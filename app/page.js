import { redirect } from 'next/navigation';

export default function Home() {

  redirect('/resume')

  return (
    <>
      <h2>Home</h2>
        <section>
          <article>
            <p>
              Welcome to my personal website.
            </p>
          </article>
      </section>
    </>
  );
}
