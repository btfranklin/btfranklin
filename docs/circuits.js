const CIRCUIT_COLOR = '60, 210, 240' // RGB values for the light blue/teal circuit color
const BACKGROUND_COLOR = '20, 30, 60' // RGB values for the dark blue background color
const CIRCUIT_COUNT = 16

class Circuit {
    constructor(x, y, angle, speed, trailLength, color, directionGroup) {
        this.x = x
        this.y = y
        this.angle = angle
        this.speed = speed
        this.trailLength = trailLength
        this.color = color
        this.directionGroup = directionGroup
        this.trail = []
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

        if (
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        ) {
            return true
        }

        return false
    }

    changeDirection() {
        this.angle = getAdjacentDirection(this.angle, this.directionGroup)
    }

    draw(ctx) {
        const fadeDistance = this.trailLength

        for (let i = 1; i < this.trail.length; i++) {
            ctx.beginPath()
            ctx.moveTo(this.trail[i - 1].x, this.trail[i - 1].y)
            ctx.lineTo(this.trail[i].x, this.trail[i].y)

            const opacity = i / fadeDistance
            ctx.strokeStyle = `rgba(${CIRCUIT_COLOR}, ${
                opacity * (Math.random() * 0.5 + 0.2)
            })`

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

const canvas = document.getElementById('circuitCanvas')
const ctx = canvas.getContext('2d')

const container = document.getElementById('circuitContainer')
canvas.width = container.offsetWidth
canvas.height = container.offsetHeight

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

let circuits = []

function createCircuits() {
    for (let i = 0; i < CIRCUIT_COUNT; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const directionGroup = x > canvas.width / 2 ? 'WESTERLY' : 'EASTERLY'
        const directions =
            directionGroup === 'EASTERLY'
                ? EASTERLY_DIRECTIONS
                : WESTERLY_DIRECTIONS
        const angle = directions[Math.floor(Math.random() * directions.length)]
        const speed = 1 + Math.random() * 3
        const trailLength = 200 + Math.random() * 400
        const color = `rgba(${CIRCUIT_COLOR}, ${Math.random() * 0.5 + 0.2})`

        circuits.push(
            new Circuit(x, y, angle, speed, trailLength, color, directionGroup)
        )
    }
}

function getAdjacentDirection(currentDirection, directionGroup) {
    const currentDirectionGroup =
        directionGroup === 'EASTERLY'
            ? EASTERLY_DIRECTIONS
            : WESTERLY_DIRECTIONS

    if (currentDirection === null) {
        return currentDirectionGroup[
            Math.floor(Math.random() * currentDirectionGroup.length)
        ]
    }

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

function update() {
    ctx.fillStyle = `rgba(${BACKGROUND_COLOR}, 0.3)`
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let newCircuits = []

    circuits.forEach((circuit) => {
        if (circuit.update()) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const directionGroup =
                x > canvas.width / 2 ? 'WESTERLY' : 'EASTERLY'
            const angle = getAdjacentDirection(null, directionGroup)
            const speed = 1 + Math.random() * 3
            const trailLength = 200
            const color = `rgba(${CIRCUIT_COLOR}, ${Math.random() * 0.5 + 0.2})`

            newCircuits.push(
                new Circuit(
                    x,
                    y,
                    angle,
                    speed,
                    trailLength,
                    color,
                    directionGroup
                )
            )
        } else {
            circuit.draw(ctx)
            newCircuits.push(circuit)
        }
    })

    circuits = newCircuits
    requestAnimationFrame(update)
}

createCircuits()
update()

window.addEventListener('resize', () => {
    const container = document.getElementById('circuitContainer')
    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight
})
