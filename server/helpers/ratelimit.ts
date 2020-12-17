import rateLimit from 'express-rate-limit';

// Rate limit middleware
const rateLimitMiddleware = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
    message: 'You have exceeded your 1000 requests per hour limit.',
    headers: true,
});
  
// Export it
export = rateLimitMiddleware;