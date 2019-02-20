"""
typeFlowers
main.py
Emily Bauer
19-02-11
"""

#I need to review
#tbh this is mostly for the words, also for the pd21 course


sprite():
  lol=300


def MainMenu():
  idk = 200

  #I need to plan this out actually


if "__name__" == main:
  main()
  
  
class Menu(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load("menuBar.gif")
        self.image = pygame.transform.scale(self.image, (640, 16))
        self.rect = self.image.get_rect()
        self.rect.centerx = 0
        self.rect.centery = 440
    def update(self):
        self.rect.centerx = 0
        self.rect.centery = 440

