
import { redirect } from '@sveltejs/kit'

export function load() {
    redirect(307, 'https://docs.google.com/forms/d/e/1FAIpQLSfLDmm1npvwMaeAG5klDSHNsh8CfsDnt25n5WKffORJNSDNPA/viewform?usp=preview')
}