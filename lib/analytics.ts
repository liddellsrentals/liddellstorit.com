import { sendGAEvent } from '@next/third-parties/google'

type InteractionPayload = {
  interaction_type: 'link' | 'button'
  interaction_text: string
  interaction_location: string
  link_url?: string
}

export function trackInteraction(payload: InteractionPayload) {
  sendGAEvent('event', 'interaction', payload)
}
