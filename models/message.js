import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false }
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
