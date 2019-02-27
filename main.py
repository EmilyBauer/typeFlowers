"""
typeFlowers
main.py
Emily Bauer
19-02-11
"""
import random
from random import randint
import pygame, math
import time
#from NotJunk import Game
pygame.init()

screen = pygame.display.set_mode((640, 480))

class Label(pygame.sprite.Sprite):
    """Label Class (simplest version
        Atttributes :
            font: any pygame Font or SysFont object
            text:  text to display
            center:  desired positon of label center (x,y)
    """
    def __init__(self, colour = (0,0,0)):
        pygame.sprite.Sprite.__init__(self)
        self.font = pygame.font.SysFont("None", 30)
        self.text = ""
        self.location= (80,20)  #hey, u there
        self.colour = colour
        self.back = (255, 0, 0)

    def update(self):
        self.image = self.font.render(self.text, 1, self.colour)
        self.rect = self.image.get_rect()
        self.rect.center = self.location

def RunProg(highscore=1000):   #Receive scene choice, word goal (later), maybe even current progress/prev file or

    pygame.display.set_caption("typeFlowers")

    background = pygame.Surface(screen.get_size())
    titlePage = pygame.image.load("..\Final Project\JohnPics\BobTitle.jpg")    #make dependant on scenic choice
    titlePage = pygame.transform.scale(titlePage, (640, 460))
    background = background.convert()
    titlePage = titlePage.convert()
    screen.blit(background, (0,0))
    screen.blit(titlePage, (0,0))

    wordCount = 0
    label1 = Label()
    label1.colour = (45, 45, 200)
    label2 = Label()
    label2.colour = (45, 45, 200)

    currentString = ''
    row1 = pygame.sprite.Group()
    firstRow = []
    for i in firstRow:
      row1.add(i)
    allSprites = pygame.sprite.Group(label1, label2)

    label1.text = "Word Goal: "+ str(highscore)
    label1.location = (80,15)
    label2.text = "Word Progress: " + str(wordCount)
    label2.location = (80, 40)


    clock = pygame.time.Clock()
    keepGoing = True
    pygame.mouse.set_visible(True)
    keys = pygame.key.get_pressed()
    while keepGoing:
        clock.tick(30)
        pygame.mouse.set_visible(True)
        for event in pygame.event.get():
            if event.type == pygame.QUIT or (event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE):
                keepGoing = False
                donePlaying = True
                allSprites.clear(screen, titlePage)
            if event.type == pygame.KEYDOWN:
                keys = pygame.key.get_pressed()
                if keys[pygame.K_SPACE]:
                    if currentString!= '':
                        print (currentString)
                        wordCount += 1
                        label2.text = "Word Progress: " + str(wordCount)
                        currentString = ''
                elif keys[pygame.K_a]:
                    currentString = currentString + 'a'
                elif keys[pygame.K_b]:
                    currentString = currentString + 'b'
                elif keys[pygame.K_c]:
                    currentString = currentString + 'c'
                elif keys[pygame.K_d]:
                    currentString = currentString + 'd'
                elif keys[pygame.K_e]:
                    currentString = currentString + 'e'
                elif keys[pygame.K_f]:
                    currentString = currentString + 'f'
                elif keys[pygame.K_g]:
                    currentString = currentString + 'g'
                elif keys[pygame.K_h]:
                    currentString = currentString + 'h'
                elif keys[pygame.K_i]:
                    currentString = currentString + 'i'
                elif keys[pygame.K_j]:
                    currentString = currentString + 'j'
                elif keys[pygame.K_k]:
                    currentString = currentString + 'k'
                elif keys[pygame.K_l]:
                    currentString = currentString + 'l'
                elif keys[pygame.K_m]:
                    currentString = currentString + 'm'
                elif keys[pygame.K_n]:
                    currentString = currentString + 'n'
                elif keys[pygame.K_o]:
                    currentString = currentString + 'o'
                elif keys[pygame.K_p]:
                    currentString = currentString + 'p'
                elif keys[pygame.K_q]:
                    currentString = currentString + 'q'
                elif keys[pygame.K_r]:
                    currentString = currentString + 'r'
                elif keys[pygame.K_s]:
                    currentString = currentString + 's'
                elif keys[pygame.K_t]:
                    currentString = currentString + 't'
                elif keys[pygame.K_u]:
                    currentString = currentString + 'u'
                elif keys[pygame.K_v]:
                    currentString = currentString + 'v'
                elif keys[pygame.K_w]:
                    currentString = currentString + 'w'
                elif keys[pygame.K_x]:
                    currentString = currentString + 'x'
                elif keys[pygame.K_y]:
                    currentString = currentString + 'y'
                elif keys[pygame.K_z]:
                    currentString = currentString + 'z'


        #keys = pygame.key.get_pressed()
        if wordCount>highscore:
            label1.text = "Goal "+str(highscore) +" Reached "





        (mouseX, mouseY) = pygame.mouse.get_pos()
        (labelX, labelY) = label2.location



        allSprites.clear(screen, titlePage)
        allSprites.update()
        allSprites.draw(screen)

        pygame.display.flip()
    return donePlaying


def main():
    highscore = 1000
    donePlaying = False
    while not donePlaying:
        donePlaying = RunProg(highscore)


def word_count(str):
  counts = dict()
  words = str.split()

  for word in words:
    if word in counts:
      counts[word] += 1
    else:
      counts[word] = 1
  return counts



if __name__ == "__main__":
    main()
