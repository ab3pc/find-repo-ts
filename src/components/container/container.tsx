import React from 'react';
import styles from './container.module.scss';

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
   {children}
  </div>
);
