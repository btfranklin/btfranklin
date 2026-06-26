const CIRCUIT_COUNT = 20 // Increased slightly for full screen
const CIRCUIT_COLOR = '60, 210, 240' // RGB values for the light blue/teal circuit color
// We don't need BACKGROUND_COLOR anymore as we are transparent

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

// Remove container dependency
// const container = document.getElementById('circuitContainer')

function resizeCanvasForHiDPI() {
    const devicePixelRatioValue = window.devicePixelRatio || 1
    const cssWidth = window.innerWidth
    const cssHeight = window.innerHeight

    canvas.style.width = cssWidth + 'px'
    canvas.style.height = cssHeight + 'px'

    canvas.width = Math.floor(cssWidth * devicePixelRatioValue)
    canvas.height = Math.floor(cssHeight * devicePixelRatioValue)

    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(devicePixelRatioValue, devicePixelRatioValue)
}

function getLogicalWidth() {
    return window.innerWidth
}

function getLogicalHeight() {
    return window.innerHeight
}

resizeCanvasForHiDPI()

class Circuit {
    constructor() {
        this.x = Math.random() * getLogicalWidth()
        this.y = Math.random() * getLogicalHeight()
        this.directionGroup =
            this.x > getLogicalWidth() / 2 ? 'WESTERLY' : 'EASTERLY'
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
            this.x > getLogicalWidth() ||
            this.y < 0 ||
            this.y > getLogicalHeight()
        )
    }

    isBeyondTrailLength() {
        return (
            this.x < -this.trailLength ||
            this.x > getLogicalWidth() + this.trailLength ||
            this.y < -this.trailLength ||
            this.y > getLogicalHeight() + this.trailLength
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

            const opacity = (i / fadeDistance) * 0.8 // Increased opacity for background subtlety
            ctx.strokeStyle = `rgba(${CIRCUIT_COLOR}, ${opacity})`
            ctx.lineWidth = 2
            ctx.stroke()
        }

        // Draw the filled circle at the head of the circuit
        const head = this.trail[this.trail.length - 1]
        ctx.beginPath()
        ctx.arc(head.x, head.y, 4, 0, 2 * Math.PI) // Slightly smaller head
        ctx.fillStyle = `rgba(${CIRCUIT_COLOR}, 1)`
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
    ctx.clearRect(0, 0, getLogicalWidth(), getLogicalHeight())

    let liveCircuits = []
    circuits.forEach((circuit) => {
        circuit.update()
        circuit.draw(ctx)
        if (circuit.isOutOfBounds()) {
            decayingCircuits.push(circuit)
            liveCircuits.push(new Circuit())
        }
        else {
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
    resizeCanvasForHiDPI()
})
