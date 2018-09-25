""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""
from collections import deque

def tree_to_list(tree):
    l = []
    l.append(tree.data)
    if tree.left:
        l = tree_to_list(tree.left) + l
    if tree.right:
        l = l + tree_to_list(tree.right)

    return l
 
def check_binary_search_tree_(root):
    treeInList = tree_to_list(root)
    
    for index, node in enumerate(treeInList):
        try:
            if(node >= treeInList[index + 1]):
                return False
        except IndexError:
            return True
