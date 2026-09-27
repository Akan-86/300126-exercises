'use client';

import { useState } from 'react';
import { quotes as initialQuotes } from '@/quotes';
import { QuoteText } from '@/components/typography/QuoteText';
import { AuthorText } from '@/components/typography/AuthorText';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

const userId = 'user-akan';

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [index, setIndex] = useState(0);
  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);

  function handleLike() {
    setQuotes((previousQuotes) =>
      previousQuotes.map((quote, quoteIndex) => {
        if (quoteIndex !== index) return quote;

        const alreadyLiked = quote.likedBy.includes(userId);
        return {
          ...quote,
          likedBy: alreadyLiked
            ? quote.likedBy.filter((id) => id !== userId)
            : [...quote.likedBy, userId],
        };
      })
    );
  }

  function handlePrevious() {
    setIndex((previousIndex) => (previousIndex - 1 + quotes.length) % quotes.length);
  }

  function handleNext() {
    setIndex((previousIndex) => (previousIndex + 1) % quotes.length);
  }

  return (
    <main className='flex grow flex-col items-center justify-center p-4'>
      <h1 className='mb-6 text-2xl font-bold'>Random Quotes</h1>
      <Card>
        <div aria-live='polite'>
          <QuoteText>{currentQuote.quote}</QuoteText>
          <AuthorText>{currentQuote.author}</AuthorText>
          <p className='mb-4 text-sm text-zinc-400'>
            Quote {index + 1} of {quotes.length}
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-3'>
          <Button onClick={handlePrevious}>Previous</Button>
          <Button onClick={handleLike} aria-pressed={isLiked}>
            {isLiked ? 'Liked' : 'Like'}
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </Card>
    </main>
  );
}
