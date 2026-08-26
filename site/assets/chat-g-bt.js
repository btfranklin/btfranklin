const banner = document.querySelector('[data-chat-g-bt-banner]')

if (banner) {
    const videos = [
        '/writing/chat-g-bt/videos/chatg-bt-horizontal-1.mp4',
        '/writing/chat-g-bt/videos/chatg-bt-horizontal-2.mp4',
        '/writing/chat-g-bt/videos/chatg-bt-horizontal-3.mp4',
    ]
    const audioToggle = document.querySelector('[data-chat-g-bt-audio-toggle]')
    const audioLabel = audioToggle.querySelector('[data-chat-g-bt-audio-label]')
    const mutedIcon = audioToggle.querySelector('[data-chat-g-bt-muted-icon]')
    const audibleIcon = audioToggle.querySelector('[data-chat-g-bt-audible-icon]')
    const source = banner.querySelector('source')

    function updateAudioControl() {
        const soundIsOn = !banner.muted
        const label = soundIsOn ? 'Turn sound off' : 'Turn sound on'

        audioToggle.setAttribute('aria-pressed', String(soundIsOn))
        audioToggle.title = label
        audioLabel.textContent = label
        mutedIcon.toggleAttribute('hidden', soundIsOn)
        audibleIcon.toggleAttribute('hidden', !soundIsOn)
    }

    source.src = videos[Math.floor(Math.random() * videos.length)]
    banner.load()
    updateAudioControl()

    audioToggle.addEventListener('click', () => {
        banner.muted = !banner.muted
        updateAudioControl()
    })

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        banner.controls = false
        banner.play()
            .then(() => {
                audioToggle.hidden = false
            })
            .catch(() => {
                banner.controls = true
            })
    }
}
