import React, { useState, useEffect, useCallback } from 'react';

export default function TypeWriter({
    phrases = [],
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
}) {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const currentPhrase = phrases[phraseIndex] || '';

    const tick = useCallback(() => {
        if (isPaused) return;

        if (isDeleting) {
            // Deleting
            setDisplayText(prev => prev.slice(0, -1));

            if (displayText === '') {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        } else {
            // Typing
            if (displayText.length < currentPhrase.length) {
                setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            } else {
                // Finished typing, pause before deleting
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseDuration);
            }
        }
    }, [displayText, isDeleting, isPaused, currentPhrase, phrases.length, pauseDuration]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timer = setTimeout(tick, isPaused ? pauseDuration : speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, isPaused, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="inline-flex items-center">
            <span className="text-gold-600">{displayText}</span>
            <span className="typing-cursor" />
        </span>
    );
}
