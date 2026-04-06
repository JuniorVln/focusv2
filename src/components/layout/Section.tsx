import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: LayoutProps) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export const Container = ({ children, className }: LayoutProps) => {
  return (
    <div className={`container-wide ${className || ''}`} style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    }}>
      {children}
    </div>
  );
};
