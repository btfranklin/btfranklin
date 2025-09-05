const CIRCUIT_COUNT = 16
const CIRCUIT_COLOR = '60, 210, 240' // RGB values for the light blue/teal circuit color
const BACKGROUND_COLOR = '20, 30, 60' // RGB values for the dark blue background color
const BACKGROUND_ALPHA = 0.3

const EASTERLY_DIRECTIONS = [
    Math.PI / 4, // NE
    0, // E
    (7 * Math.PI) / 4, // SE
]

const WESTERLY_DIRECTIONS = [
    (3 * Math.PI) / 4, // NW
    Math.PI, // W
    (5 * Math.PI) / 4, // SW
]

const canvas = document.getElementById('circuitCanvas')
const ctx = canvas.getContext('2d')

const container = document.getElementById('circuitContainer')
canvas.width = container.offsetWidth
canvas.height = container.offsetHeight

class Circuit {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.directionGroup =
            this.x > canvas.width / 2 ? 'WESTERLY' : 'EASTERLY'
        this.directions =
            this.directionGroup === 'EASTERLY'
                ? EASTERLY_DIRECTIONS
                : WESTERLY_DIRECTIONS
        this.angle =
            this.directions[Math.floor(Math.random() * this.directions.length)]
        this.speed = 1 + Math.random() * 3
        this.trailLength = 100

        this.trail = []
    }

    isOutOfBounds() {
        return (
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        )
    }

    isBeyondTrailLength() {
        return (
            this.x < -this.trailLength ||
            this.x > canvas.width + this.trailLength ||
            this.y < -this.trailLength ||
            this.y > canvas.height + this.trailLength
        )
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        this.trail.push({ x: this.x, y: this.y })
        if (this.trail.length > this.trailLength) {
            this.trail.shift()
        }

        if (Math.random() < 0.01) {
            this.changeDirection()
        }
    }

    changeDirection() {
        this.angle = getRandomDirection(this.angle, this.directionGroup)
    }

    draw(ctx) {
        const fadeDistance = this.trailLength

        for (let i = 1; i < this.trail.length; i++) {
            ctx.beginPath()
            ctx.moveTo(this.trail[i - 1].x, this.trail[i - 1].y)
            ctx.lineTo(this.trail[i].x, this.trail[i].y)

            const opacity = i / fadeDistance
            ctx.strokeStyle = `rgba(${CIRCUIT_COLOR}, ${opacity})`
            ctx.lineWidth = 2
            ctx.stroke()
        }

        // Draw the filled circle at the head of the circuit
        const head = this.trail[this.trail.length - 1]
        ctx.beginPath()
        ctx.arc(head.x, head.y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(${CIRCUIT_COLOR}, 1)`
        ctx.fill()

        // Create a radial gradient for the glow effect
        const glowRadius = 10
        const glowGradient = ctx.createRadialGradient(
            head.x,
            head.y,
            0,
            head.x,
            head.y,
            glowRadius
        )
        glowGradient.addColorStop(0, `rgba(${CIRCUIT_COLOR}, 0.8)`)
        glowGradient.addColorStop(1, `rgba(${CIRCUIT_COLOR}, 0)`)

        ctx.fillStyle = glowGradient
        ctx.fill()
    }
}

let circuits = []
let decayingCircuits = []

function getRandomDirection(currentDirection, directionGroup) {
    const currentDirectionGroup =
        directionGroup === 'EASTERLY'
            ? EASTERLY_DIRECTIONS
            : WESTERLY_DIRECTIONS

    const currentDirectionIndex =
        currentDirectionGroup.indexOf(currentDirection)
    let directions

    if (currentDirectionIndex === 0) {
        directions = [0, 1]
    } else if (currentDirectionIndex === currentDirectionGroup.length - 1) {
        directions = [-1, 0]
    } else {
        directions = [-1, 0, 1]
    }

    const newDirectionIndex =
        currentDirectionIndex +
        directions[Math.floor(Math.random() * directions.length)]

    if (
        newDirectionIndex >= 0 &&
        newDirectionIndex < currentDirectionGroup.length
    ) {
        return currentDirectionGroup[newDirectionIndex]
    } else {
        return currentDirection
    }
}

function updateCanvas() {
    ctx.fillStyle = `rgba(${BACKGROUND_COLOR}, ${BACKGROUND_ALPHA})`
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let liveCircuits = []
    circuits.forEach((circuit) => {
        circuit.update()
        circuit.draw(ctx)
        if (circuit.isOutOfBounds()) {
            decayingCircuits.push(circuit)
            liveCircuits.push(new Circuit())
        } else {
            liveCircuits.push(circuit)
        }
    })

    let stillDecayingCircuits = []
    decayingCircuits.forEach((decayingCircuit) => {
        decayingCircuit.update()
        decayingCircuit.draw(ctx)
        if (!decayingCircuit.isBeyondTrailLength()) {
            stillDecayingCircuits.push(decayingCircuit)
        }
    })

    circuits = liveCircuits
    decayingCircuits = stillDecayingCircuits
    requestAnimationFrame(updateCanvas)
}

// Create the initial circuits
for (let i = 0; i < CIRCUIT_COUNT; i++) {
    circuits.push(new Circuit())
}
updateCanvas()

// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight
})
