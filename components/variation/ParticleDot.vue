<template>
  <div>
    <canvas id="particles-js" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement
  canvas.style.border = 'none'

  canvas.width = innerWidth
  canvas.height = innerHeight

  const particle = canvas.getContext('2d')!

  const mouse = {
    x: undefined as number | undefined,
    y: undefined as number | undefined
  }

  window.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
  })

  window.addEventListener('resize', function () {
    canvas.width = this.innerWidth
    canvas.height = this.innerHeight
  })

  function Circle (this: { x: number; y: number; dx: number; dy: number; radius: number; color: string }, x: number, y: number, dx: number, dy: number, radius: number, color: string) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

    this.draw = function () {
      particle.beginPath()
      particle.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      particle.strokeStyle = this.color
      particle.lineWidth = 3
      particle.fillStyle = 'transparent'
      particle.fill()
      particle.stroke()
    }

    this.update = function (this: { x: number; y: number; dx: number; dy: number; radius: number; color: string }) {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx
      }
      this.x += this.dx

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy
      }
      this.y += this.dy

      if (this.radius > 2) {
        this.radius--
      }

      this.draw()
    }
  }

  const arrCircle: any[] = []

  const randomColor = [
    '#FF6584',
    '#6b6b6b',
    '#3A80F6'
  ]

  for (let i = 0; i < (innerWidth + innerHeight) / 10; i++) {
    const x = Math.random() * innerWidth
    const y = Math.random() * innerHeight
    const radius = Math.random() * 10
    const dx = Math.random()
    const dy = Math.random()
    const randIndex = Math.floor(Math.random() * 3)
    const color = randomColor[randIndex]
    arrCircle.push(new Circle(x, y, dx, dy, radius, color))
  }

  function animate () {
    requestAnimationFrame(animate)
    particle.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < arrCircle.length / 4; i++) {
      arrCircle[i].update()
    }
  }

  animate()
})
</script>

<style scoped>
  #particles-js {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: transparent;
    z-index: -10;
  }
</style>
