import cn from 'classnames';
import { useState } from 'preact/hooks';

import css from './styles.module.scss';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What is Born to Silly?',
    answer:
      'Born to Silly is a collaborative art project that brings together artists from around the world to create a wholesome MLP art pack. The project aims to spread joy and help those in need through art that celebrates family life, child care, and adoption.',
  },
  {
    question: 'How can I contribute art?',
    answer:
      'You can submit your artwork through our submission form on the home page. We welcome all skill levels and styles.',
  },
  {
    question: 'What is the deadline for submissions?',
    answer:
      'The deadline has not yet been set. Keep an eye on the discussions in the thread.',
  },
  {
    question: 'Are there any content guidelines?',
    answer: 'TBD. Discussion in the thread.',
  },
  {
    question: 'Can I submit multiple pieces of art?',
    answer: 'Absolutely! We welcome multiple submissions from the same artist.',
  },
  {
    question: 'What file formats are accepted?',
    answer:
      "We accept pretty much any non-executable file format! This includes images, text files, documents, videos, and archives. As long as it's a static file that can be viewed or extracted, it's welcome!",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <h2>Frequently Asked Questions</h2>
      <div class={css.faqList}>
        {faqData.map((item, index) => (
          <div class={css.faqItem} key={index}>
            <button
              class={cn(css.question, { [css.open]: openIndex === index })}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span class={css.questionText}>{item.question}</span>
              <span class={css.icon}>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div class={cn(css.answer, { [css.open]: openIndex === index })}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
