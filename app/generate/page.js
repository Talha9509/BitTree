// app/generate/page.js

import { Suspense } from 'react';
import GenerateContent from '@/components/generatecontent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
